import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
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
  //declarer les ids ici en .map

  return isLoading ? (
    <div>Page en cours de chargement</div>
  ) : (
    <div>
      {/* clic pour naviguer vers offer */}
      <Header />
      {/* <Link to={`/offer/${id}`}>go to offer</Link> */}
      <h2>Nb Offre: {data.count}</h2>
      <div className="Liste-Offre">
        {data.offers.map((elem) => {
          //console.log("test>", elem._id);
          const id = elem._id;
          return (
            <div className="vignette">
              <div className="map1">
                <div className="head-vignette">
                  <img
                    className="profpic"
                    src={elem.owner.account.avatar.url}
                    alt="profile pic"
                  />
                  <p className="profname">{elem.owner.account.username}</p>
                </div>
                <Link to={`/offer/${id}`}>
                  <img
                    className="article"
                    src={elem.product_pictures[0].url}
                    alt="produit"
                  />

                  <p className="price">{elem.product_price} €</p>
                </Link>
                <div className="map2">
                  {elem.product_details.map((item) => {
                    //console.log(item.TAILLE);
                    return (
                      <div className="desc">
                        <p>{item.MARQUE}</p>
                        <p>{item.TAILLE}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
