
// import React, { useState} from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import questions from '../data/questions';
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
//       // When quiz is completed, save data in localStorage under the user's key
//       const userId = localStorage.getItem('userId');
//       if (userId) {
//         // Retrieve user's previous data if any
//         const userData = JSON.parse(localStorage.getItem(`user_${userId}`)) || { quizzes: {} };
        
//         // Update quiz attempt and scores for the specific quiz
//         if (!userData.quizzes[quizId]) {
//           userData.quizzes[quizId] = { attempts: 0, scores: [] };
//         }

//         // Increment attempt count and store the score
//         userData.quizzes[quizId].attempts += 1;
//         userData.quizzes[quizId].scores.push(score);
        
//         // Save updated data back to localStorage
//         localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
//       }

//       // Navigate to Score Summary Page
//       navigate('/score', { state: { score: score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title } });
//     }

//     setSelectedAnswer('');
    
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




import React, { useState } from 'react';
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
    const isSkipped = selectedAnswer === ''; // Check if the answer was skipped
    const updatedAnswers = [...userAnswers, { question: currentQuestion.question, selected: selectedAnswer || 'Skipped', correct: currentQuestion.correct }];
    setUserAnswers(updatedAnswers);

    if (!isSkipped && selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // When quiz is completed, navigate to the score page
      navigate('/score', { state: { score, answers: updatedAnswers, totalQuestions: quiz.questions.length, quizName: quiz.title } });
    }

    setSelectedAnswer(''); // Reset selected answer
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
