import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
import ChallengeScreenForm from "./ChallengeScreenForm.js";

const ChallengeScreen = () => {
  const { challengeId } = useParams();
  const [challenge, setChallenge] = useState();
  //Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const getChallenge = () => {
      firebase.db
        .collection("challenges")
        .doc(challengeId)
        .get()
        .then((response) => {
          const data = response.data();
          data.id = response.id;
          setChallenge({ ...data });
        });
    };
    getChallenge();
  }, [challengeId]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Editar Desafío</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          {challenge && <ChallengeScreenForm challenge={challenge} />}
        </div>
      </div>
    </div>
  );
};

export default ChallengeScreen;
