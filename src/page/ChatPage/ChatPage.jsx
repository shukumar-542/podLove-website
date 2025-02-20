import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello my dear sir, I'm here to deliver the design requirement document for our next projects.",
      sender: "other",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sender: "self",
    },
    {
      text: "Hello my dear sir, I'm here to deliver the design requirement document for our next projects.",
      sender: "other",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sender: "self",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "self" }]);
      setInput("");
    }
  };
  return (
    <div className="bg-[#FCECE4] py-10">
      <div className="container mx-auto  flex flex-col ">
        {/* Header */}
        <div className="bg-[#FF805D] text-white p-3 text-lg font-semibold">
          Emily
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
                msg.sender === "self" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 text-sm rounded-lg ${
                  msg.sender === "self"
                    ? "bg-[#FF805D] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {msg.text}
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
            className="bg-[#FF805D] text-white p-2 rounded-full "
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
