import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

import Challenge from "../ui/Challenge";

const Portada = () => {
  //definir el state para los desafios
  const [challenges, setChallenges] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  //consultar a la base de datos al cargar
  useEffect(() => {
    const getChallenges = () => {
      firebase.db.collection("challenges").onSnapshot(handleSnapshot);
    };
    getChallenges();
  }, []);

  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function handleSnapshot(snapshot) {
    const challenges = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    //almacenar resultados en el state
    setChallenges(challenges);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Desafíos</h1>
      <Link
        to="/nuevo-desafio"
        className="bg-blue-600 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold rounded-md"
      >
        Agregar Desafío
      </Link>

      {challenges.map((challenge) => (
        <Challenge key={challenge.id} challenge={challenge} />
      ))}
    </>
  );
};

export default Portada;
