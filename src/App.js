import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'Which team made Resident Evil?',
      answerOptions: [
        { answerText: 'Capcom', isCorrect: true },
        { answerText: 'Namco Bandai', isCorrect: false },
        { answerText: 'Ubisoft', isCorrect: false },
        { answerText: 'Ninja Theory', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the composer of the music for Silent Hill?',
      answerOptions: [
        { answerText: 'Akira Yamaoka', isCorrect: true },
        { answerText: 'Kenta Nagata', isCorrect: false },
        { answerText: 'Yasunori Nishiki', isCorrect: false },
        { answerText: 'Motoi Sakuraba', isCorrect: false },
      ],
    },
    {
      questionText: 'What year was the game of Pong created?',
      answerOptions: [
        { answerText: '1972', isCorrect: true },
        { answerText: '1971', isCorrect: false },
        { answerText: '1976', isCorrect: false },
        { answerText: '1974', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the title of the first Quantic Dream game?',
      answerOptions: [
        { answerText: 'Syphon Filter', isCorrect: false },
        { answerText: 'Prisoner of War', isCorrect: false },
        { answerText: 'Urban Chaos', isCorrect: false },
        { answerText: 'The Nomad Soul', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the name of the main character of Ghostwire:Tokyo?',
      answerOptions: [
        { answerText: 'Yaseotoko', isCorrect: false },
        { answerText: 'Akito', isCorrect: true },
        { answerText: 'Komote', isCorrect: false },
        { answerText: 'Shiromuku', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreTable, setScoreTable] = useState([]);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
      setScoreTable([...scoreTable, {
        question: currentQuestion + 1,
        points: 10,
        result: 'Correct'
      }]);
    } else {
      setScoreTable([...scoreTable, {
        question: currentQuestion + 1,
        points: 0,
        result: 'Incorrect'
      }]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="scoreTable">
          <h2>Quiz Complete!</h2>
          <div className="finalScore">Final Score: {score} points</div>
          <div className="progressBar">
            <div 
              className="progressFill" 
              style={{width: `${(score / (questions.length * 10)) * 100}%`}}
            ></div>
          </div>
          <table className="resultsTable">
            <thead>
              <tr>
                <th>Question</th>
                <th>Result</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {scoreTable.map((result, index) => (
                <tr key={index} className={result.result.toLowerCase()}>
                  <td>Question {result.question}</td>
                  <td>{result.result}</td>
                  <td>{result.points}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Total Score:</td>
                <td>{score}</td>
              </tr>
            </tfoot>
          </table>
          <div className="scorePercentage">
            Success Rate: {Math.round((score / (questions.length * 10)) * 100)}%
          </div>
          <button className="restartBtn" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="questionField">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-fields">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                className="answerBtn"
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;