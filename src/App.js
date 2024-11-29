
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuizListPage from './components/QuizListPage';
// import QuizPage from './components/QuizPage';

// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import Homepage from './pages/Homepage';
// import ScoreSummaryPage from './components/ScoreSummaryPage';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//       <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/quiz/:quizId" element={<QuizPage />} />
//         <Route path="/quizzes" element={<QuizListPage />} />
//         <Route path="/score" element={<ScoreSummaryPage />} />
//       </Routes>
//       <ToastContainer />
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuizListPage from './components/QuizListPage';
// import QuizPage from './components/QuizPage';

// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import Homepage from './pages/Homepage';
// import ScoreSummaryPage from './components/ScoreSummaryPage';
// import Navbar from './components/Navbar';
// import PrivateRoute from './routes/PrivateRoute';


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
        
//         {/* Use PrivateRoute for protected routes */}
//         <Route path="/quiz/:quizId" element={<PrivateRoute element={QuizPage} />} />
//         <Route path="/quizzes" element={<PrivateRoute element={QuizListPage} />} />
//         <Route path="/score" element={<PrivateRoute element={ScoreSummaryPage} />} />
//       </Routes>
//       <ToastContainer />
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuizListPage from './components/QuizListPage';
// import QuizPage from './components/QuizPage';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import Homepage from './pages/Homepage';
// import ScoreSummaryPage from './components/ScoreSummaryPage';
// import Navbar from './components/Navbar';
// import PrivateRoute from './routes/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
        
//         {/* Protected routes */}
//         <Route path="/quiz/:quizId" element={<PrivateRoute element={<QuizPage />} />} />
//         <Route path="/quizzes" element={<PrivateRoute element={<QuizListPage />} />} />
//         <Route path="/score" element={<PrivateRoute element={<ScoreSummaryPage />} />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </Router>
//   );
// };

// export default App;






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuizListPage from './components/QuizListPage';
// import QuizPage from './components/QuizPage';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import Homepage from './pages/Homepage';
// import ScoreSummaryPage from './components/ScoreSummaryPage';
// import Navbar from './components/Navbar';
// import PrivateRoute from './routes/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         {/* Protected routes */}
//         <Route path="/quiz/:quizId" element={<PrivateRoute element={<QuizPage />} />} />
//         <Route path="/quizzes" element={<PrivateRoute element={<QuizListPage />} />} />
//         <Route path="/score" element={<PrivateRoute element={<ScoreSummaryPage />} />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import QuizListPage from './components/QuizListPage';
// import QuizPage from './components/QuizPage';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
// import Homepage from './pages/Homepage';
// import ScoreSummaryPage from './components/ScoreSummaryPage';
// import Navbar from './components/Navbar';
// import PrivateRoute from './routes/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         {/* Protected Routes */}
//         <Route path="/quiz/:quizId" element={<PrivateRoute element={<QuizPage />} />} />
//         <Route path="/quizzes" element={<PrivateRoute element={<QuizListPage />} />} />
//         <Route path="/score" element={<PrivateRoute element={<ScoreSummaryPage />} />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizListPage from './components/QuizListPage';
import QuizPage from './components/QuizPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import ScoreSummaryPage from './components/ScoreSummaryPage';
import Navbar from './components/Navbar';
import PrivateRoute from './routes/PrivateRoute';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected routes */}
        <Route path="/quiz/:quizId" element={<PrivateRoute element={<QuizPage />} />} />
        <Route path="/quizzes" element={<PrivateRoute element={<QuizListPage />} />} />
        <Route path="/score" element={<PrivateRoute element={<ScoreSummaryPage />} />} />
        <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} /> {/* Add profile route */}
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  );
};

export default App;
