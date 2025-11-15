import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import CourseDetails from './pages/CourseDetails';
import './App.css';

function App() {
  return (
    <Router basename="/QuizVocacionalSenac">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultado/:courseId" element={<Result />} />
          <Route path="/curso/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
      <footer className='credits'>Made by Prof Bruno Martins</footer>
    </Router>
  );
}

export default App;
