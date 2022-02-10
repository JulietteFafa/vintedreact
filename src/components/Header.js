import logo from "../assets/Vinted_logo.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="boutons">
        <Link to={"/signup"}>
          <button>S'inscrire</button>
        </Link>
        <button>Se Connecter</button>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
