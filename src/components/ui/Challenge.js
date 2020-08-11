import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";

const Challenge = ({ challenge }) => {
  // availableRef para acceder al valor directamente
  const availableRef = useRef(challenge.available);

  //context de firebase para cambios en la BD
  const { firebase } = useContext(FirebaseContext);

  const { id, nombre, descripcion, image, available } = challenge;

  //modificar el estado del desafio en firebase
  const updateAvailibity = () => {
    const available = availableRef.current.value === "true";

    try {
      firebase.db
        .collection("challenges")
        .doc(id)
        .update({ available: available });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white rounded-md">
        <div className="lg:flex ">
          <div className="lg:w-5/12 xl:w-3/12">
            <img className="rounded-md" src={image} alt="Imagen del desafío" />
            <div className="sm:flex sm:-mx-2 pl-2">
              <label className="block mt-5 sm:w-2/4">
                <span className="block text-gray-800 mb-2">Visualización:</span>
                <select
                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={available}
                  ref={availableRef}
                  onChange={() => updateAvailibity()}
                >
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </label>
            </div>
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">
              {nombre.toUpperCase()}
            </p>
            <p className="text-gray-600 mb-4">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
