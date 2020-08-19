import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
import { toast } from "react-toastify";

const Challenge = ({ challenge }) => {
  // statusRef para acceder al valor directamente
  const statusRef = useRef(challenge.status);
  //context de firebase para cambios en la BD
  const { firebase } = useContext(FirebaseContext);

  const { id, name, description, image, status } = challenge;

  //modificar el estado del desafio en firebase
  const updateStatus = () => {
    const status = statusRef.current.value === "true";

    try {
      firebase.db.collection("challenges").doc(id).update({ status: status });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar este desafío?")) {
      await firebase.db.collection("challenges").doc(id).delete();
      toast("Desafío eliminado correctamente", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 mr-4 ">
      <img className="w-full" src={image} alt="Imagen del desafío" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl text-yellow-600 mb-4">
          {name.toUpperCase()}
        </div>
        <p className="text-gray-600 mb-4 text-base">{description}</p>
        {/* <label className="block mt-5 sm:w-2/4">
          <span className="block text-gray-800 mb-2">Visualización:</span>
          <select
          className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          value={status}
          ref={statusRef}
          onChange={() => updateStatus()}
          >
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
          </select>
        </label> */}
        <div className="mt-4">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            to={`./${id}`}
          >
            Ver más
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => handleDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
