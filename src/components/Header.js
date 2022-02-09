import logo from "../assets/Vinted_logo.png";
import "../components/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="boutons">
        <button>S'inscrire</button>
        <button>Se Connecter</button>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
