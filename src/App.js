//dependencias
import React from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import firebase, { FirebaseContext } from "./firebase";

//componentes
import Challenges from "./components/pages/Challenges";
import NewChallenge from "./components/pages/NewChallenge";
import ChallengeScreen from "./components/pages/ChallengeScreen";
import Sidebar from "./components/ui/Sidebar";
import { Dashboard } from "./components/pages/Dashboard";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 p-6 bg-gray-200">
          <Routes>
            <Route exact path="/desafios" element={<Challenges />} />
            <Route exact path="/nuevo-desafio" element={<NewChallenge />} />
            <Route
              exact
              path="/desafios/:challengeId"
              element={<ChallengeScreen />}
            />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </FirebaseContext.Provider>
  );
}

export default App;
