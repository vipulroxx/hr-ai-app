import React from 'react';

const ChatWindow = ({ messages, onSend }) => {
  const [input, setInput] = React.useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div
      className="hr-chat-container"
      style={{
        margin: '32px 32px 32px 272px',
        padding: '24px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
      }}
    >
      <div className="hr-messages" style={{ margin: '20px 0', minHeight: '120px' }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`hr-message ${msg.from}`}
            style={{
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
              backgroundColor: msg.from === 'ai' ? '#e1f5fe' : '#c8e6c9',
              alignSelf: msg.from === 'ai' ? 'flex-start' : 'flex-end'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form className="hr-input-row" onSubmit={handleSend} style={{ display: 'flex' }}>
        <input
          className="hr-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me anything about HR..."
          autoFocus
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        />
        <button
          className="hr-send-btn"
          type="submit"
          style={{
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;