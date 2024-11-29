
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import questions from '../data/questions'; // Assuming questions are imported from here

// const QuizPage = () => {
//   const { quizId } = useParams();
//   const navigate = useNavigate();
  
//   // Find the quiz based on quizId
//   const quiz = questions.find(q => q.id === parseInt(quizId));
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [score, setScore] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);

//   const currentQuestion = quiz ? quiz.questions[currentQuestionIndex] : null;

//   const handleNextQuestion = () => {
//     // Store the answer and check if it's correct
//     const updatedAnswers = [...userAnswers, { question: currentQuestion.question, selected: selectedAnswer, correct: currentQuestion.correct }];
//     setUserAnswers(updatedAnswers);

//     if (selectedAnswer === currentQuestion.correct) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // Navigate to Score Summary Page after quiz completion
//       navigate('/score', { state: { score: score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title  } });
//     }

//     setSelectedAnswer(''); // Clear selected answer for the next question
//   };

//   if (!quiz) {
//     return <div>Quiz not found</div>;
//   }

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-center">{quiz.title}</h1>
//       <div className="mb-6">
//         <p className="text-xl mb-4">{currentQuestion.question}</p>
//         <div className="space-y-2">
//           {currentQuestion.options.map((option, index) => (
//             <label key={index} className="block">
//               <input
//                 type="radio"
//                 name="answer"
//                 value={option}
//                 onChange={(e) => setSelectedAnswer(e.target.value)}
//                 checked={selectedAnswer === option}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//         <button
//           onClick={handleNextQuestion}
//           className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
//         >
//           {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;




// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import questions from '../data/questions'; // Assuming questions are imported from here

// const QuizPage = () => {
//   const { quizId } = useParams();
//   const navigate = useNavigate();
  
//   // Find the quiz based on quizId
//   const quiz = questions.find(q => q.id === parseInt(quizId));

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [score, setScore] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [attempts, setAttempts] = useState(0);  // Track the number of attempts

//   const currentQuestion = quiz ? quiz.questions[currentQuestionIndex] : null;

//   // Load quiz attempt history from localStorage when component mounts
//   useEffect(() => {
//     const savedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
//     const quizAttempts = savedAttempts[quizId] || { count: 0, scores: [] };
//     setAttempts(quizAttempts.count);  // Set number of attempts
//   }, [quizId]);

//   const handleNextQuestion = () => {
//     // Store the answer and check if it's correct
//     const updatedAnswers = [...userAnswers, { question: currentQuestion.question, selected: selectedAnswer, correct: currentQuestion.correct }];
//     setUserAnswers(updatedAnswers);

//     if (selectedAnswer === currentQuestion.correct) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // Save attempt history and navigate to score summary
//       const savedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
//       const quizAttempts = savedAttempts[quizId] || { count: 0, scores: [] };

//       // Increment attempt count and store the new score
//       quizAttempts.count += 1;
//       quizAttempts.scores.push(score);

//       savedAttempts[quizId] = quizAttempts;
//       localStorage.setItem('quizAttempts', JSON.stringify(savedAttempts));

//       // Navigate to Score Summary Page after quiz completion
//       navigate('/score', { state: { score: score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title, attempts: quizAttempts.count } });
//     }

//     setSelectedAnswer(''); // Clear selected answer for the next question
//   };

//   if (!quiz) {
//     return <div>Quiz not found</div>;
//   }

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-center">{quiz.title}</h1>
      
//       {/* Display attempt count if the quiz has been taken before */}
//       {attempts > 0 && (
//         <div className="mb-4 text-center text-gray-500">
//           <p>You have attempted this quiz {attempts} {attempts === 1 ? 'time' : 'times'}.</p>
//         </div>
//       )}

//       <div className="mb-6">
//         <p className="text-xl mb-4">{currentQuestion.question}</p>
//         <div className="space-y-2">
//           {currentQuestion.options.map((option, index) => (
//             <label key={index} className="block">
//               <input
//                 type="radio"
//                 name="answer"
//                 value={option}
//                 onChange={(e) => setSelectedAnswer(e.target.value)}
//                 checked={selectedAnswer === option}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//         <button
//           onClick={handleNextQuestion}
//           className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
//         >
//           {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import questions from '../data/questions'; // Assuming questions are imported from here

// const QuizPage = () => {
//   const { quizId } = useParams();
//   const navigate = useNavigate();
  
//   // Find the quiz based on quizId
//   const quiz = questions.find(q => q.id === parseInt(quizId));

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [score, setScore] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [attempts, setAttempts] = useState(0);  // Track the number of attempts

//   const currentQuestion = quiz ? quiz.questions[currentQuestionIndex] : null;

//   // Load quiz attempt history from localStorage when component mounts
//   useEffect(() => {
//     const savedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
//     const quizAttempts = savedAttempts[quizId] || { count: 0, scores: [] };
//     setAttempts(quizAttempts.count);  // Set number of attempts
//   }, [quizId]);

//   const handleNextQuestion = () => {
//     // Store the answer and check if it's correct
//     const updatedAnswers = [...userAnswers, { question: currentQuestion.question, selected: selectedAnswer, correct: currentQuestion.correct }];
//     setUserAnswers(updatedAnswers);

//     if (selectedAnswer === currentQuestion.correct) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // Save attempt history and navigate to score summary
//       const savedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
//       const quizAttempts = savedAttempts[quizId] || { count: 0, scores: [] };

//       // Increment attempt count and store the new score
//       quizAttempts.count += 1;
//       quizAttempts.scores.push(score);

//       savedAttempts[quizId] = quizAttempts;
//       localStorage.setItem('quizAttempts', JSON.stringify(savedAttempts));

//       // Navigate to Score Summary Page after quiz completion
//       navigate('/score', { state: { score: score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title, attempts: quizAttempts.count } });
//     }

//     setSelectedAnswer(''); // Clear selected answer for the next question
//   };

//   if (!quiz) {
//     return <div>Quiz not found</div>;
//   }

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-center">{quiz.title}</h1>
      
//       {/* Display attempt count if the quiz has been taken before */}
//       {attempts > 0 && (
//         <div className="mb-4 text-center text-gray-500">
//           <p>You have attempted this quiz {attempts} {attempts === 1 ? 'time' : 'times'}.</p>
//         </div>
//       )}

//       <div className="mb-6">
//         <p className="text-xl mb-4">{currentQuestion.question}</p>
//         <div className="space-y-2">
//           {currentQuestion.options.map((option, index) => (
//             <label key={index} className="block">
//               <input
//                 type="radio"
//                 name="answer"
//                 value={option}
//                 onChange={(e) => setSelectedAnswer(e.target.value)}
//                 checked={selectedAnswer === option}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//         <button
//           onClick={handleNextQuestion}
//           className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
//         >
//           {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questions from '../data/questions'; // Assuming questions are imported from here

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  
  // Find the quiz based on quizId
  const quiz = questions.find(q => q.id === parseInt(quizId));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = quiz ? quiz.questions[currentQuestionIndex] : null;

  const handleNextQuestion = () => {
    // Store the answer and check if it's correct
    const updatedAnswers = [...userAnswers, { question: currentQuestion.question, selected: selectedAnswer, correct: currentQuestion.correct }];
    setUserAnswers(updatedAnswers);

    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // When quiz is completed, save data in localStorage under the user's key
      const userId = localStorage.getItem('userId'); // Assume userId is stored in localStorage when the user logs in
      if (userId) {
        // Retrieve user's previous data if any
        const userData = JSON.parse(localStorage.getItem(`user_${userId}`)) || { quizzes: {} };
        
        // Update quiz attempt and scores for the specific quiz
        if (!userData.quizzes[quizId]) {
          userData.quizzes[quizId] = { attempts: 0, scores: [] };
        }

        // Increment attempt count and store the score
        userData.quizzes[quizId].attempts += 1;
        userData.quizzes[quizId].scores.push(score);
        
        // Save updated data back to localStorage
        localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
      }

      // Navigate to Score Summary Page
      navigate('/score', { state: { score: score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title } });
    }

    setSelectedAnswer(''); // Clear selected answer for the next question
  };

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{quiz.title}</h1>
      
      <div className="mb-6">
        <p className="text-xl mb-4">{currentQuestion.question}</p>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                checked={selectedAnswer === option}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <button
          onClick={handleNextQuestion}
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 focus:outline-none"
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
