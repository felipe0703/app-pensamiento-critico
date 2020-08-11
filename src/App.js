//dependencias
import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

//componentes
import Challenges from "./components/pages/Challenges";
import NewChallenge from "./components/pages/NewChallenge";
import Sidebar from "./components/ui/Sidebar";

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
            <Route path="/desafios" element={<Challenges />} />
            <Route path="/nuevo-desafio" element={<NewChallenge />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
