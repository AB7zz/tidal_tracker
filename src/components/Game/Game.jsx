import React, { useState } from 'react';
import TopNav from '../TopNavbar/TopNav';

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: '1. What is the most important piece of boat safety equipment?',
      choices: ['Map', 'Rod and Reels', 'Compass', 'Life jacket'],
      answer: 3
    },
    {
      question: '2. What should you pay attention to when trying to avoid accidents while fishing?',
    choices: ['Never attempt to remove a hook from around a persons eyes',
    'Keep fishing knives sharp',
    'Pay attention to your surroundings',
    'Use caution when baiting and removing hooks'],
      answer: 2
    },
    {
      question: '3. What should you always do when baiting and removing hooks?',
      choices: ['Use force',
      'Pull hard',
      'Use caution',
      'Go fast'],
      answer: 2
    },
    {
      question: '4. Keep fishing knives sharp and cover the blade when not in use?',
      choices: ['True', 'False'],
      answer: 0
    },
    {
      question: '5.Never attempt to remove a hook from around a persons eyes?',
      choices: ['True', 'False'],
      answer: 0
    }
  ];

  const playAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
  }
  const handleAnswer = (selected) => {
    setAnswers([...answers, selected]);

    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1);
    }
  }

  if (currentQuestion === -1) {
    return (
      <>
      <TopNav/>
        <div className="text-center py-4 bg-blue-500 text-white">
          <h1 className="text-2xl">Game Over</h1>
          <p className="text-xl font-bold">You scored {score} out of {questions.length}</p>
          <button className='bg-blue-500 mt-10' onClick={playAgain}>Play Again</button>
        </div>
      </>
    );
  } else {
    const question = questions[currentQuestion];
    return (
      <>
      <TopNav/>
        <div className='text-center mt-20'>
          <h1 className='text-xl mt-3 mb-8'>{question.question}</h1>
            <ul>
              {question.choices.map((choice, index) => (
                <li key={choice} className='bg-blue-500 mb-5 text-center w-30 h-15'>
                  <button onClick={() => handleAnswer(index)}>{choice}</button>
                </li>
              ))}
            </ul>
          </div>
      </>
    );
          }
    }
    export default Game