import React, { useState } from 'react'

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { text: "Hello my dear sir, I'm here to deliver the design requirement document for our next projects.", sender: "other" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", sender: "self" },
        { text: "Hello my dear sir, I'm here to deliver the design requirement document for our next projects.", sender: "other" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", sender: "self" }
      ]);
      const [input, setInput] = useState("");
  return (
    <div className='bg-[#f7e8e1]'>
        <div className='container mx-auto'>

        </div>
    </div>
  )
}

export default ChatPage