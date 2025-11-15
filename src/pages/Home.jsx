import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-section">
          <img 
            src="/LogoSenacColoridaQuadrada.png" 
            alt="Senac" 
            className="home-logo"
          />
        </div>
        
        <h1 className="home-title">Quiz Vocacional</h1>
        <h2 className="home-subtitle">Descubra qual Curso Técnico combina com você!</h2>
        
        <p className="home-description">
          Responda algumas perguntas e descubra qual dos nossos cursos técnicos
          tem mais a ver com o seu perfil:
        </p>

        <div className="courses-preview">
          <div className="course-badge" style={{ backgroundColor: '#004C94' }}>
            <span className="course-icon">🎮</span>
            <span>Jogos Digitais</span>
          </div>
          <div className="course-badge" style={{ backgroundColor: '#F7941E' }}>
            <span className="course-icon">💻</span>
            <span>Desenvolvimento de Sistemas</span>
          </div>
          <div className="course-badge" style={{ backgroundColor: '#FBC483' }}>
            <span className="course-icon">🎨</span>
            <span>Multimídia</span>
          </div>
        </div>

        <Link to="/quiz" className="start-button">
          Iniciar Quiz
        </Link>

        <div className="home-footer">
          <p>São apenas 7 perguntas rápidas! ⚡</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
