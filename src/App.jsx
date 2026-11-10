import "./App.css";
import image from "./me.jpg";
import Header from "./assets/header.jsx"
import Navbar from "./assets/navbar.jsx"
import StudentCard from "./assets/studentcard.jsx";
import Footer from "./assets/footer.jsx";
import { useState } from "react";

function App() {
  const [filtre, setFiltre] = useState("");
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "Mohamed", prenom: "Ben Youssef", mail: "benyoussef673@gmail.com", tel: "+216 20 110 747", filiere: "GLSI", annee: "2eme annee", grp: "grp1", ville: "Mahdia", image: image },
    { id: 2, nom: "Mohamed", prenom: "Ben Youssef", mail: "benyoussef673@gmail.com", tel: "+216 20 110 747", filiere: "IRS", annee: "2eme annee", grp: "grp1", ville: "Mahdia", image: image },
    { id: 3, nom: "Mohamed", prenom: "Ben Youssef", mail: "benyoussef673@gmail.com", tel: "+216 20 110 747", filiere: "GLSI", annee: "2eme annee", grp: "grp1", ville: "Mahdia", image: image },
  ]);

  function modifier(id){
    const saisie = prompt("nouveau prenom :");

    if (saisie === null || saisie.trim() === ""){
      return;
    }

    setEtudiants(etudiants.map((etu)=>
    etu.id === id ? {...etu, nom: saisie}: etu ));
  }

  function supprimer(id) {
    setEtudiants(etudiants.filter((etu) => etu.id !== id));
  }

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "Mohamed",
      prenom: "Ben Youssef",
      mail: "benyoussef673@gmail.com",
      tel: "+216 20 110 747",
      filiere: "GLSI",
      annee: "2eme annee",
      grp: "grp1",
      ville: "Mahdia",
      image: image,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // Liste affichée = étudiants dont le nom ou le prénom contient le texte tapé
  const etudiantsFiltres = etudiants.filter((etu) =>
    `${etu.filiere}`.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    
    <div >
      <Navbar />
      <Header />
      <input
        type="text"
        placeholder="Rechercher un étudiant..."
        value={filtre}
        onChange={(etu) => setFiltre(etu.target.value)}
      />
      <div className="container">
        
        {etudiantsFiltres.map((etu) => (
        <StudentCard
          key={etu.id}
          id={etu.id}
          prenom={etu.prenom}
          nom={etu.nom}
          email={etu.mail}
          telephone={etu.tel}
          filiere={etu.filiere}
          anneeEtude={etu.annee}
          groupe={etu.grp}
          ville={etu.ville}
          image={etu.image}
          onSupprimer={supprimer}
          onModifier={modifier}
        />
      ))}
      </div>
      

      <div className="action">
        <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;