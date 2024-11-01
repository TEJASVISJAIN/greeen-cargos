import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const message = 'Coming Soon';

  // Typing animation effect for "Coming Soon"
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        index++;
        setTimeout(typeText, 200); // Adjust speed here
      } else {
        // Show "GREEN CARGOS 👕" after "Coming Soon" is fully typed
        setTimeout(() => setShowSecondMessage(true), 1000);
      }
    };
    typeText();
  }, []);

  return (
    <div className="container">
      <h1 className="glow">{text}</h1>
      {showSecondMessage && (
        <h1 className="big-text fade-in">GREEN CARGOS 👕</h1>
      )}
    </div>
  );
}

export default App;
