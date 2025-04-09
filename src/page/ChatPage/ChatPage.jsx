import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import {db} from '../../firebase'
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where
} from "firebase/firestore";
import { useParams } from "react-router";
import { useGetUserQuery } from "../../redux/Api/AuthApi";

const ChatPage = () => {
  const {data : userId} = useGetUserQuery()
  const {id} = useParams();
  const senderId = userId?.data?._id;      
  const receiverId = id; 
 


  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!senderId || !receiverId) return; 
    const q = query(
      collection(db, "messages"),
      where("participants", "array-contains", senderId),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allMessages = snapshot.docs.map((doc) => doc.data());
      // Filter messages only between these 2 users
      const filtered = allMessages.filter(
        (m) =>
          (m.senderId === senderId && m.receiverId === receiverId) ||
          (m.senderId === receiverId && m.receiverId === senderId)
      );
      setMessages(filtered);
    });

    return () => unsubscribe();
  }, [senderId, receiverId]);

  const sendMessage = async () => {
    if (input.trim()) {
      await addDoc(collection(db, "messages"), {
        message: input,
        senderId,
        receiverId,
        participants: [senderId, receiverId], 
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };

  // const sendMessage = () => {
  //   if (input.trim()) {
  //     setMessages([...messages, { text: input, sender: "self" }]);
  //     setInput("");
  //   }
  // };
  return (
    <div className="bg-[#FCECE4] py-10 min-h-screen">
    <div className="container mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-[#FF805D] text-white p-3 text-lg font-semibold">
        Chat with Emily
      </div>

      {/* Date Separator */}
      <div className="text-center py-2">
        <span className="bg-[#C0815F] text-white px-4 py-1 rounded-md text-sm">
          TODAY
        </span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.senderId === senderId ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 text-sm rounded-lg ${
                msg.senderId === senderId
                  ? "bg-[#FF805D] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 bg-[#FFD1C4] flex items-center gap-2 mt-10">
        <input
          type="text"
          className="flex-1 p-2 rounded-full bg-white text-gray-700 focus:outline-none"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-[#FF805D] text-white p-2 rounded-full"
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
