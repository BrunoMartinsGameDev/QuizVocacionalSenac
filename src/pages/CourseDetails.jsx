import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import './CourseDetails.css';

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId];

  if (!course) {
    navigate('/');
    return null;
  }

  return (
    <div className="course-details-container">
      <div className="course-details-content">
        <div className="course-details-header" style={{ backgroundColor: course.color }}>
          <span className="course-details-icon">{course.icon}</span>
          <h1 className="course-details-title">{course.title}</h1>
          <p className="course-details-subtitle">{course.description}</p>
        </div>

        <div className="course-details-body">
          <section className="details-section">
            <h2>🎯 Perfil do Profissional</h2>
            <p className="profile-text">{course.profile}</p>
          </section>

          <section className="details-section">
            <h2>📚 O que você vai aprender</h2>
            <div className="topics-grid">
              {course.topics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <span className="topic-bullet" style={{ backgroundColor: course.color }}>✓</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="details-section">
            <h2>💼 Áreas de Atuação</h2>
            <div className="careers-grid">
              {course.careers.map((career, index) => (
                <div 
                  key={index} 
                  className="career-card"
                  style={{ borderLeftColor: course.color }}
                >
                  {career}
                </div>
              ))}
            </div>
          </section>

          <div className="course-actions">
            <Link to="/quiz" className="action-button primary" style={{ backgroundColor: course.color }}>
              Fazer o Quiz
            </Link>
            <Link to="/" className="action-button secondary">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
