import React, { useState } from "react";

function Ejercicio4() {
  const [numero1, guardarNumero1] = useState(0);
  const [numero2, guardarNumero2] = useState(0);

  const num1 = (e) => {
    guardarNumero1(parseInt(e.target.value));
  };
  const num2 = (e) => {
    guardarNumero2(parseInt(e.target.value));
  };
  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 4</h1>
      <p className="text-gray-700 text-base m-4">
        4. Crear un algoritmo que lea dos números y luego imprima un mensaje en
        pantalla indicando si los números introducidos son iguales o diferentes.
      </p>

      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba un numero"
          onChange={num1}
          autoFocus
        />
      </div>
      <div className="flex mt-3">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100  appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba un numero"
          onChange={num2}
          autoFocus
        />
      </div>

      {numero1 === numero2 ? (
        <h1 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Los Numero son Iguales
        </h1>
      ) : (
        <h1 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Los Numero son Diferentes
        </h1>
      )}
    </div>
  );
}

export default Ejercicio4;
