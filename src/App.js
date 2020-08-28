import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9";
import Ejercicio10 from "./components/Ejercicio10";

function App() {
  const [ver, cambiarVer] = useState(false);

  let clases =
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center boton";
  let clases1 =
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center boton hidden";

  const toggle = () => {
    cambiarVer(!ver);
  };

  return (
    <Router>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <span className="font-semibold text-3xl tracking-tight">
            React js
          </span>
        </div>
        <div className="block lg:hidden ">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggle}
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={ver ? clases : clases1}>
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/ejercicio1"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 1
            </NavLink>
            <NavLink
              to="/ejercicio2"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 2
            </NavLink>
            <NavLink
              to="/ejercicio3"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 3
            </NavLink>
            <NavLink
              to="/ejercicio4"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 4
            </NavLink>
            <NavLink
              to="/ejercicio5"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 5
            </NavLink>
            <NavLink
              to="/ejercicio6"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 6
            </NavLink>
            <NavLink
              to="/ejercicio7"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 7
            </NavLink>
            <NavLink
              to="/ejercicio8"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 8
            </NavLink>
            <NavLink
              to="/ejercicio9"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 9
            </NavLink>
            <NavLink
              to="/ejercicio10"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Ejercicio 10
            </NavLink>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/ejercicio1">
          <Ejercicio1 />
        </Route>
        <Route path="/ejercicio2">
          <Ejercicio2 />
        </Route>
        <Route path="/ejercicio3">
          <Ejercicio3 />
        </Route>
        <Route path="/ejercicio4">
          <Ejercicio4 />
        </Route>
        <Route path="/ejercicio5">
          <Ejercicio5 />
        </Route>
        <Route path="/ejercicio6">
          <Ejercicio6 />
        </Route>
        <Route path="/ejercicio7">
          <Ejercicio7 />
        </Route>
        <Route path="/ejercicio8">
          <Ejercicio8 />
        </Route>
        <Route path="/ejercicio9">
          <Ejercicio9 />
        </Route>
        <Route path="/ejercicio10">
          <Ejercicio10 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
