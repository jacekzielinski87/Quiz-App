import arrow  from './arrow 1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className='quiz'>
        Quiz App
      </p>
      <div className='questionField'></div>
      <p className='question'>
        Question 1
        Question 2
        Question 3
        Question 4
        Question 5
      </p>
      <div className='btnQuestions'>
      <img className='arrowLeft' src={arrow} alt="arrow png file"></img>
      <img className='arrowRight'src={arrow} alt="arrow png file 2"></img>
      </div>
    </div>
  );
}

export default App;
