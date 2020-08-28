import React, { useState } from "react";

function Ejercicio7() {
  const [numero, guardarNumero] = useState(0);

  const descuento = (e) => {
    guardarNumero(parseFloat(e.target.value));
  };
  const valorDescuento = (numero * 20) / 100;

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 7</h1>
      <p className="text-gray-700 text-base m-4 ">
        7. En un almacén se hace un 20 % de descuento a los clientes cuya compra
        supere los $5000; ¿cuál será la cantidad que pagara una persona por su
        compra?
      </p>

      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba un numero"
          onChange={descuento}
          autoFocus
        />
      </div>
      {numero > 5000 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El valor a pagar es de: ${numero - valorDescuento}
        </h3>
      ) : null}
    </div>
  );
}

export default Ejercicio7;
