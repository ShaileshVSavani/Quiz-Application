
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const ScoreSummaryPage = () => {
//   const location = useLocation();
//   const { score, answers, totalQuestions, quizName } = location.state || {};

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-center">{quizName} - Score Summary</h1>
      
//       {/* Centering the score and correct answers */}
//       <div className="flex justify-center items-center mb-6">
//         <div className="text-xl text-center">
//           <p>Your Score: <span className="font-semibold">{score} / {totalQuestions}</span></p>
//           <p className="text-gray-500">Correct Answers: {score}</p>
//         </div>
//       </div>

//       {/* Grid for answers */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {answers.map((answer, index) => (
//           <div key={index} className="p-4 border rounded-lg shadow-sm">
//             <p className="font-semibold text-lg">{answer.question}</p>
//             <p className={`mt-2 ${answer.selected === answer.correct ? 'text-green-600' : 'text-red-600'}`}>
//               Your Answer: {answer.selected}
//             </p>
//             <p className="text-sm text-gray-500">Correct Answer: {answer.correct}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScoreSummaryPage;





// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const ScoreSummaryPage = () => {
//   const location = useLocation();
//   const { score, answers, totalQuestions, quizName, attempts } = location.state || {};

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-4 text-center">{quizName} - Score Summary</h1>
      
//       <div className="text-center mb-6">
//         <p>Your Score: <span className="font-semibold">{score} / {totalQuestions}</span></p>
//         <p className="text-gray-500">Correct Answers: {score}</p>
//         <p className="text-gray-500">You have attempted this quiz {attempts} {attempts === 1 ? 'time' : 'times'}.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {answers.map((answer, index) => (
//           <div key={index} className="p-4 border rounded-lg shadow-sm">
//             <p className="font-semibold text-lg">{answer.question}</p>
//             <p className={`mt-2 ${answer.selected === answer.correct ? 'text-green-600' : 'text-red-600'}`}>
//               Your Answer: {answer.selected}
//             </p>
//             <p className="text-sm text-gray-500">Correct Answer: {answer.correct}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScoreSummaryPage;


import React from 'react';
import { useLocation } from 'react-router-dom';

const ScoreSummaryPage = () => {
  const location = useLocation();
  const { score, answers, totalQuestions, quizName, attempts } = location.state || {};

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{quizName} - Score Summary</h1>
      
      <div className="text-center mb-6">
        <p>Your Score: <span className="font-semibold">{score} / {totalQuestions}</span></p>
        <p className="text-gray-500">Correct Answers: {score}</p>
        <p className="text-gray-500">You have attempted this quiz {attempts} {attempts === 1 ? 'time' : 'times'}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {answers.map((answer, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <p className="font-semibold text-lg">{answer.question}</p>
            <p className={`mt-2 ${answer.selected === answer.correct ? 'text-green-600' : 'text-red-600'}`}>
              Your Answer: {answer.selected}
            </p>
            <p className="text-sm text-gray-500">Correct Answer: {answer.correct}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreSummaryPage;
