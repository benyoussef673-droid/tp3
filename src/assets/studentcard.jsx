import "./../App.css";
import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img
        src={props.image}
        alt={`Photo de ${props.prenom}`}
        className="photo"
      />

      <h1>Fiche étudiant</h1>

      <p>Nom & Prénom : {props.nom} {props.prenom}</p>
      {coordonneesVisibles && (
        <>
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
        </>
      )}
      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>
      <br />
      
      <div className="but">
        <button onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>
        <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>
        <button onClick={() => props.onModifier(props.id)}>modifier</button>
      </div>
      <br /><br />
    </div>
  );
}

export default StudentCard;