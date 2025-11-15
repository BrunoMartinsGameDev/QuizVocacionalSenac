import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img 
          src="/LogoSenacBrancaRetangular.png" 
          alt="Senac Logo" 
          className="logo"
        />
      </Link>
    </header>
  );
}

export default Header;
