import React, { useState } from 'react';
import '../index.css'; // Импорт CSS файла

function FAQ({ question, answer, link }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? 'active' : ''}`} onClick={toggleActive}>
      <div className="question">
        <div className="question_1">
          <h3>{question}</h3>
          <a href={link} className="faq-button">Забронировать</a>
        </div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="question_2">
        <div className="answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
