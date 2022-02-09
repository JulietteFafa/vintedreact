import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Offer.css";

const Offer = () => {
  // valeur de retour de la F  use params ex: toto
  const { id } = useParams();
  //variable pour stocker les changments d'etats
  const [data, setData] = useState();
  //variable pour le message le tempsd e la récuperation de deonnées externes
  const [isLoading, setIsLoading] = useState(true);

  // recuperation des données de url vinted reacteur
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
      //console.log("test>", isLoading);
      //console.log("test>>", data);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>Page en cours de chargement</div>
  ) : (
    <div>
      <Header />
      <div className="details">
        <div className="bigpic">
          <img src="" alt="bigpic" />
        </div>
        <div className="vignette-droite">
          <div className="infos">
            <p className="prix">prix €</p>
            <p className="marque">marque</p>
            <p className="taille">taille</p>
            <p className="couleur">couleur</p>
            <p className="moneybitch"> CB</p>
            <h4 className="titredesc">Beau pull gris</h4>
            <p className="paradesc">il tient chaud</p>
          </div>
          <div className="profinfos">
            <img src="" alt="profpic" />
            <p className="name">Alix</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
