import { useParams } from "react-router-dom";

const Offer = () => {
  // valeur de retour de la F  use params ex: toto
  const { id } = useParams();
  return <div>je suis sur la page produit dont l'id est : {id}</div>;
};
export default Offer;
