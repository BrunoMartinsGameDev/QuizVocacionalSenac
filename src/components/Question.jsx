import { useState } from 'react';
import './Question.css';

function Question({ question, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option, index) => {
    setSelectedOption(index);
    setTimeout(() => {
      onAnswer(option.course);
      setSelectedOption(null);
    }, 300);
  };

  return (
    <div className="question-container fade-in">
      <h2 className="question-title">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleSelect(option, index)}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
