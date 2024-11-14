'use client';
import React, { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

const QuizBuilder = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleOptionChange = (e: any) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setFeedback('Please select an option.');
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct) {
      setFeedback('Correct!');
      setScore(score + 1);
    } else {
      setFeedback('Incorrect!');
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(''); // Reset selected answer for the next question
    } else {
      setIsQuizComplete(true);
    }
  };

  if (isQuizComplete) {
    return (
      <div style={style.container}>
        <div id="feedback" style={style.feedback}>
          Quiz Complete! You scored {score} out of {questions.length}!
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {currentQuestion.question}
      </div>
      <div style={style.options}>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index + 1}`}
              name="options"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option${index + 1}`}>{option}</label>
          </div>
        ))}
      </div>
      <button style={style.button} id="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      {feedback && (
        <div id="feedback" style={style.feedback}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default QuizBuilder;
