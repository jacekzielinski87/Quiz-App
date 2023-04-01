import React, {useState} from 'react';
import './App.css';
import arrow from "./arrow.png";



function App() {

const questions = [
  {
    questionText: 'Which team made Resident Evil?',
    answerOptions: [
      {answerText: 'Capcom', isCorrect: true},
      {answerText: 'Namco Bandai', isCorrect: false},
      {answerText: 'Ubisoft', isCorrect: false},
      {answerText: 'Ninja Theory', isCorrect: false},
    ],
  },
  {
    questionText: 'Who is the composer of the music for Silent Hill?',
    answerOptions: [
      {answerText: 'Akira Yamaoka', isCorrect: true},
      {answerText: 'Kenta Nagata', isCorrect: false},
      {answerText: 'Yasunori Nishiki', isCorrect: false},
      {answerText: 'Motoi Sakuraba', isCorrect: false},
    ],
  },
  {
    questionText: 'What year was the game of Pong created?',
    answerOptions: [
      {answerText: '1976', isCorrect: true},
      {answerText: '1971', isCorrect: false},
      {answerText: '1972', isCorrect: true},
      {answerText: '1974', isCorrect: false},
    ],
  },
  {
    questionText: 'What is the title of the first Quantic Dream game?',
    answerOptions: [
      {answerText: 'Syphon Filter', isCorrect: false},
      {answerText: 'Prisoner of War', isCorrect: false},
      {answerText: 'Urban Chaos', isCorrect: false},
      {answerText: 'The Nomad Soul', isCorrect: true},
    ],
  },
  {
    questionText: 'What is the name of the main character of Ghostwire: Tokyo?',
    answerOptions: [
      {answerText: 'Yaseotoko', isCorrect: false},
      {answerText: 'Akito', isCorrect: true},
      {answerText: 'Komote', isCorrect: false},
      {answerText: 'Shiromuku', isCorrect: false},
    ],
  }
]

const [currentQuestion, setCurrentQuestion] = useState (0);

return (
    <div className="App">
      <div className='questionField'></div>
        <div className='question-count'>
          <span>Question 1</span>/{questions.length}
        </div>
        <div className='question-text'>
          {questions[currentQuestion].questionText}
        </div>
          <div className='answer-question'>
            {questions[0].answerOptions.map((answerOption) => {
              <button>{answerOption.answerText}</button>
            })}
          </div>
          <div className='arrow-questions'>
            <img className='nextLeft' src={arrow}></img>
            <img className='nextRight' src={arrow}></img>
          </div>
      </div>
  );
}

export default App;
