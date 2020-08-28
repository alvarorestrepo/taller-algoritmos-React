import React, { useState } from "react";

function Ejercicio3() {
  const [numero, cambiarNumero] = useState(0);

  const cuantasCifras = (e) => {
    cambiarNumero(e.target.value);
  };

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 3</h1>
      <p className="text-gray-700 text-base m-4">
        3. Crear un algoritmo que lea un número y luego imprima un mensaje
        indicando si el número introducido es de 1, 2 o 3 cifras.
      </p>

      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba un numero"
          onChange={cuantasCifras}
          autoFocus
        />
      </div>

      <h1 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
        El numero es de {numero.length} cifras
      </h1>
    </div>
  );
}

export default Ejercicio3;
