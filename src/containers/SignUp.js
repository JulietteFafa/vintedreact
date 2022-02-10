import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //variable pour stocker les changments d'etats
  const [data, setData] = useState();
  //variable pour le message le tempsd e la récuperation de deonnées externes
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup"
      );
      setData(response.data);
      setIsLoading(false);
      //console.log("test>", isLoading);
      console.log("test>>", data);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>Page en cours de chargement</div>
  ) : (
    <div>
      <Header />
      <h5>S'inscrire</h5>
      <form action="inscription">
        <input type="text" value={name} placeholder="Nom d'utilisateur" />
        <input type="email" id="email" value={email} placeholder="Email" />
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
        />
      </form>
    </div>
  );
};
export default SignUp;
