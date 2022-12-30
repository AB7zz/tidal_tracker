import React, { useState } from 'react';
import TopNav from '../TopNavbar/TopNav';

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the name of this fish?',
      image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSd5d7gevLvfIeY58Diu79qp6_tLB0iQOJUP1vjJx0JiQwRY_kFZqIiytiB9A_6zseZMtNKR6j4i6vTd1M',
      choices: ['Goldfish', 'Piranha', 'Betta', 'Angel Fish'],
      answer: 3
    },
    {
      question: 'What is the name of this fish?',
      image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTvCGBn4IGVtBMnr_FVnWBe9U9wYstrct0aARENjuYBkesmTCeKy-MQay0DAYRkLXYwhO7kehY1qIYLQBI',
      choices: ['Guppy', 'Koi', 'Tetra', 'Discus'],
      answer: 0
    },
    {
      question: 'What is the name of this fish?',
      image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTD9MjwF0GxQboiiduGv_vnpCRy6iJBsc7hYlxfObdoijxjZjH5GyBi5qUP3zqi3U9WgcU9m7O5JflCMCE',
      choices: ['Cichlid', 'Barb', 'Oscar', 'Loach'],
      answer: 2
    },
    {
      question: 'What is the name of this fish?',
      image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSvb2D-NcT5vHf7eFKbgu87excTY5qzfGogPkPZQWTxODQO7O7LQx5YN8T7eCe8v06XMN5dDoCCPls0UK8',
      choices: ['Plecostomus', 'Gourami', 'Danios', 'Rasbora'],
      answer: 1
    },
    {
      question: 'What is the name of this fish?',
      image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTMjaDeeTr19N-iXyO8aJ2E23qNPoueyg2ED7E68funowaMkllVID3ffNYltmd07dHXtAlYcbQf4zijNB4',
      choices: ['Swordtail', 'Molly', 'Platy', 'Catfish'],
      answer: 2
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
        <div className='text-center'>
          <h1 className='text-2xl mt-3 font-bold mb-3'>{question.question}</h1>
          <img src={question.image} alt="Fish" className='text-center mb-5'/>
          <ul>
            {question.choices.map((choice, index) => (
              <li key={choice} className='bg-blue-500 mb-3 text-xl text-white text-center w-30 h-10'>
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