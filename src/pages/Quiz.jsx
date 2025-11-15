import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import ProgressBar from '../components/ProgressBar';
import { questions } from '../data/questions';
import './Quiz.css';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (course) => {
    const newAnswers = [...answers, course];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const counts = {};
      newAnswers.forEach(answer => {
        if (counts[answer]) {
          counts[answer]++;
        } else {
          counts[answer] = 1;
        }
      });

      let winner = "";
      let maxVotes = 0;

      for (let course in counts) {
        if (counts[course] > maxVotes) {
          maxVotes = counts[course];
          winner = course;
        }
      }

      // Navegar
      navigate(`/resultado/${winner}`);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={questions.length} 
        />
        <Question 
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex}
        />
      </div>
    </div>
  );
}

export default Quiz;
