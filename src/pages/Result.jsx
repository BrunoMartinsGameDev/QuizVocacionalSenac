import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import './Result.css';

function Result() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses[courseId];

  if (!course) {
    navigate('/');
    return null;
  }

  const otherCourses = Object.values(courses).filter(c => c.id !== courseId);

  return (
    <div className="result-container">
      <div className="result-content">
        <div className="result-header" style={{ backgroundColor: course.color }}>
          <span className="result-icon">{course.icon}</span>
          <h1 className="result-title">Seu curso ideal é...</h1>
          <h2 className="result-course-name">{course.title}</h2>
        </div>

        <div className="result-body">
          <div className="result-description">
            <p>{course.description}</p>
          </div>

          <div className="result-actions">
            <Link 
              to={`/curso/${course.id}`} 
              className="details-button"
              style={{ backgroundColor: course.color }}
            >
              Ver Detalhes do Curso
            </Link>
            <Link to="/" className="restart-button">
              Refazer Quiz
            </Link>
          </div>

          <div className="other-courses">
            <h3>Conheça também os outros cursos:</h3>
            <div className="other-courses-grid">
              {otherCourses.map(otherCourse => (
                <Link
                  key={otherCourse.id}
                  to={`/curso/${otherCourse.id}`}
                  className="other-course-card"
                  style={{ borderColor: otherCourse.color }}
                >
                  <span className="other-course-icon">{otherCourse.icon}</span>
                  <span className="other-course-name">{otherCourse.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
