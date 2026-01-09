import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
  or,
  and,
} from "firebase/firestore";
import { useParams } from "react-router";
import {
  useGetPodCastDetailsQuery,
  useGetUserQuery,
} from "../../redux/Api/AuthApi";

const ChatPage = () => {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);
  const { data: userId } = useGetUserQuery();
  const { id } = useParams();
  const senderId = userId?.data?._id;
  const receiverId = id;
  const { data: getPodcastDetails } = useGetPodCastDetailsQuery();

  const podcastData = getPodcastDetails?.data?.podcast;

  let participant = null;
  if (podcastData) {
    if (podcastData.primaryUser?._id === id) {
      participant = podcastData.primaryUser;
    } else {
      participant = podcastData.participants?.find((p) => p._id === id);
    }
  }

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!senderId || !receiverId) return;

    // Image-er 1st index (receiverId, senderId, timestamp) optimize korar query
    // Ekhane 'or' logic use kora hoyeche jate sender ebong receiver er moddhe sob message ashe
    const q = query(
      collection(db, "messages"),
      or(
        and(
          where("senderId", "==", senderId),
          where("receiverId", "==", receiverId)
        ),
        and(
          where("senderId", "==", receiverId),
          where("receiverId", "==", senderId)
        )
      ),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(allMessages);
    });

    return () => unsubscribe();
  }, [senderId, receiverId]);

  const sendMessage = async () => {
    if (input.trim()) {
      try {
        await addDoc(collection(db, "messages"), {
          message: input,
          senderId,
          receiverId,
          // participants array-ti thakleo somossya nei, tobe ekhon query senderId/receiverId diye hobe
          participants: [senderId, receiverId],
          timestamp: serverTimestamp(),
        });
        setInput("");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  return (
    <div className="bg-[#fef7f5] min-h-[80vh] flex flex-col">
      {/* Header */}
      <div className="bg-[#FF805D] text-white p-4 text-lg font-semibold shadow-md text-center">
        Chat With {participant?.name || "User"}
      </div>

      {/* Date Separator */}
      <div className="text-center py-2">
        <span className="bg-[#C0815F] text-white px-4 py-1 rounded-full text-sm shadow">
          TODAY
        </span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-2">
        <div className="container mx-auto px-4 space-y-4">
          {messages.map((msg, index) => {
            const isSelected = selectedMessageIndex === index;
            const isMe = msg.senderId === senderId;

            return (
              <div
                key={msg.id || index}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm text-sm break-words relative cursor-pointer ${
                    isMe
                      ? "bg-[#FF805D] text-white rounded-tr-none"
                      : "bg-white text-gray-800 rounded-tl-none border"
                  }`}
                  onClick={() =>
                    setSelectedMessageIndex(isSelected ? null : index)
                  }
                >
                  {msg.message}
                  {isSelected && msg.timestamp?.toDate && (
                    <div
                      className={`text-[10px] mt-1 ${
                        isMe ? "text-orange-100" : "text-gray-400"
                      } text-right`}
                    >
                      {msg.timestamp.toDate().toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input Field */}
      <div className="p-4 border-t">
        <div className="container mx-auto flex items-center gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-full bg-white text-gray-700 ring-2 ring-[#ff805d7a] focus:ring-[#FF805D] focus:outline-none transition duration-150 shadow-sm"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            className="bg-[#FF805D] hover:bg-[#e56b4d] transition duration-150 text-white p-3 rounded-full shadow"
            onClick={sendMessage}
          >
            <IoSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
