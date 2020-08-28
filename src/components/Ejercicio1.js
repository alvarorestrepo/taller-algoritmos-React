import React, { useState } from "react";

const Ejercicio1 = () => {
  const [cantidad, guardarCantidad] = useState(0);
  const [validar, cambiarValidar] = useState("No hay numero");

  const positivoNegativo = (e) => {
    guardarCantidad(parseInt(e.target.value));

    if (parseInt(e.target.value) === 0) {
      cambiarValidar("es cero");
      console.log(cantidad);
      return;
    } else if (parseInt(e.target.value) > 0) {
      cambiarValidar("es positivo");
      console.log(cantidad);
      return;
    } else if (parseInt(e.target.value) < 0) {
      cambiarValidar("es negativo");
      console.log(cantidad);
      return;
    } else if (isNaN(parseInt(e.target.value))) cambiarValidar("No hay numero");
    console.log(cantidad);
  };

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 1</h1>
      <p className="text-gray-700 text-base m-4 ">
        1. Crear un algoritmo que reciba un número y muestre si es positivo,
        negativo o es el número cero.
      </p>

      <div className="flex ">
        <div className=" p-3 bg-gray-200 border text-gray-700 ">
          <span>#</span>
        </div>
        <input
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="number"
          placeholder="Escriba un numero"
          onChange={positivoNegativo}
          autoFocus
        />
      </div>

      <h1 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
        {validar}
      </h1>
    </div>
  );
};

export default Ejercicio1;
