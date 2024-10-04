

"use client"; // Ensure this is marked as a Client Component

import React, { useState } from 'react';

export default function DynamicPage({ params }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentChat, setCurrentChat] = useState('Chat 1');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Update messages with user input
      setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: 'Hello', sender: 'bot' }]);
      }, 1000);
      setInput(''); // Clear input field
    }
  };

  const handleNewChat = () => {
    setMessages([]); // Clear messages
    setCurrentChat(`Chat ${messages.length + 2}`); // Update chat name
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#121212', color: '#ffffff' }}>
      <div style={{ width: '20%', backgroundColor: '#1e1e1e', borderRight: '1px solid #333333', padding: '1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Chats</h2>
        <button
          onClick={handleNewChat}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', backgroundColor: '#5c6bc0', color: 'white', marginBottom: '0.5rem', border: 'none', cursor: 'pointer' }}
        >
          New Chat
        </button>
        <div style={{ padding: '0.5rem', backgroundColor: '#292929', borderRadius: '5px' }}>
          <strong>{currentChat}</strong>
        </div>
      </div>
      <div style={{ width: '80%', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{currentChat}</h2>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflowY: 'auto' }}>
          <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.sender === 'user' && <span style={{ fontSize: '40px', marginRight: '0.5rem' }}>👤</span>}
                  <div style={{ padding: '0.5rem 1rem', borderRadius: '5px', backgroundColor: msg.sender === 'user' ? '#007bff' : '#3a3a3a', color: '#ffffff' }}>
                    {msg.text}
                  </div>
                  {msg.sender === 'bot' && <span style={{ fontSize: '40px', marginLeft: '0.5rem' }}>👾</span>}
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#b0b0b0' }}>No messages yet.</div>
            )}
          </div>
        </div>
        <form onSubmit={handleSend} style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{ flex: 1, padding: '0.75rem', borderRadius: '5px', border: '1px solid #444444', backgroundColor: '#1e1e1e', color: '#ffffff', marginRight: '0.5rem' }}
          />
          <button type="submit" style={{ padding: '0.75rem', borderRadius: '5px', backgroundColor: '#5c6bc0', color: 'white' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
