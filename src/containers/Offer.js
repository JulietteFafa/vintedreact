import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Offer.css";

const Offer = () => {
  // valeur de retour de la F  use params ex: toto
  const { id } = useParams();
  //console.log("test>>", id); ok
  //variable pour stocker les changments d'etats
  const [data, setData] = useState();
  //variable pour le message le tempsd e la récuperation de deonnées externes
  const [isLoading, setIsLoading] = useState(true);

  // utiliser use state pour que data soit egal au produit qui sera sur la page avec id mentionné dans useparams

  // recuperation des données de url vinted reacteur
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
      //console.log("test>", isLoading);
      console.log("test>>", data.product_details);
      //undefined;
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Page en cours de chargement</div>
  ) : (
    <div>
      <Header />
      <div className="map">
        <div className="details">
          <div className="bigpic">
            <img src={data.product_pictures[0].secure_url} alt="bigpic" />
          </div>
          <div className="vignette-droite">
            <div className="infos">
              <span className="prix">{data.product_price} €</span>
              <br /> {/* faire un map sur tableau et faire object.keys */}
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <p>
                    {keys[0]}:{elem[keys[0]]}
                  </p>
                );
              })}
              <h4 className="titredesc">{data.product_name}</h4>
              <p className="paradesc">{data.product_description}</p>
            </div>
            <div className="profinfos">
              <img src={data.owner.account.avatar.secure_url} alt="profpic" />
              <p className="name">{data.owner.account.username}</p>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
export default Offer;
