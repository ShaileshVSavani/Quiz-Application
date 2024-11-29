
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-32 px-6 sm:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Welcome to the Ultimate Quiz Platform</h1>
        <p className="text-xl sm:text-2xl mb-6">Test your skills across multiple domains and track your progress!</p>
        <div className="flex justify-center gap-6">
          <Link
            to="/quizzes"
            className="px-8 py-4 bg-white text-blue-500 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Our Quiz Platform?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our quiz platform offers a variety of challenges to sharpen your knowledge and skills. Whether you're a beginner or an expert,
          we have something for everyone. Explore a range of quizzes, track your progress, and improve your abilities.
        </p>
        <Link
          to="/quizzes"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Quizzes
        </Link>
      </div>

      {/* Available Quizzes Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Popular Quizzes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Quiz Cards */}
            {['HTML', 'CSS', 'JavaScript Basics', 'JavaScript Advanced', 'React', 'Node.js', 'SQL', 'Git & GitHub'].map((quiz, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{quiz} Quiz</h3>
                <p className="text-gray-600 mb-4">Test your skills in {quiz} and gain valuable insights!</p>
                <Link
                  to={`/quiz/${index + 1}`}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Start Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-6 mt-12">
        <div className="text-center">
          <p className="text-lg">&copy; 2024 QuizApp. All Rights Reserved.</p>
        </div>
      </footer>

      <ToastContainer />
    </div>
  );
};

export default Homepage;
