import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <header className="md:w-2/5 xl:w-1/5 border-gray-600 border-r bg-blue-600">
      <div className="p-6 border-black">
        <p className=" text-white text-2xl tracking-wide text-center font-bold">
          Pensamiento Crítico
        </p>
        <p className="mt-3 text-white ">
          Administra tus desafíos en las siguientes opciones:
        </p>
        <nav className="mt-10">
          <NavLink
            className="p-2 text-gray-400 block rounded-md hover:bg-yellow-500 hover:text-gray-600 hover:font-bold"
            activeClassName="text-yellow-500"
            exact="true"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          {/* <NavLink
            className="p-2 text-gray-400 block rounded-md hover:bg-yellow-500 hover:text-gray-600 hover:font-bold"
            activeClassName="text-yellow-500"
            exact="true"
            to="/desafios"
          >
            Desafíos
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
