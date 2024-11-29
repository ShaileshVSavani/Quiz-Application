
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes'; // Assuming your quizzes data is here

const QuizListPage = () => {
  // Initialize state here, before any conditional logic or rendering
  const [quizData, setQuizData] = useState(quizzes);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">Explore Our Quizzes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">{quiz.title}</h2>
              <p className="text-gray-600 mb-6">{quiz.description}</p>
              <Link
                to={`/quiz/${quiz.id}`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 hover:to-teal-500 transition duration-300 ease-in-out"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizListPage;
