
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="./logo.svg" alt="Le logo Sportsee" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
