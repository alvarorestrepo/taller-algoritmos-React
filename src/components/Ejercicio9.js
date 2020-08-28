import React, { useState } from "react";

function Ejercicio9() {
  const [numerocamisas, guardarNumeroCamisas] = useState(0);
  const [valorcamisas, guardarValorCamisas] = useState(0);

  const numeroCamisa = (e) => {
    guardarNumeroCamisas(parseInt(e.target.value));
  };
  const valorCamisas = (e) => {
    guardarValorCamisas(parseInt(e.target.value));
  };
  let valortotal = numerocamisas * valorcamisas;
  let valor1 = (valortotal * 10) / 100;
  let valor2 = (valortotal * 20) / 100;
  let valor3 = (valortotal * 40) / 100;

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 9</h1>
      <p className="text-gray-700 text-base m-4 ">
        9. Calcule el total a pagar por la compra de camisas. • Si se compran 3
        o menos camisas se le aplica un descuento del 10%. • Si se compran más
        de 3 pero menos de 5 camisas se le aplica un 20% de descuento. • Si se
        compran 5 o más obtiene un descuento del 40%.
      </p>

      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba numero camisas"
          onChange={numeroCamisa}
          autoFocus
        />
      </div>
      <div className="flex mt-3">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba el valor por cada camisa"
          onChange={valorCamisas}
        />
      </div>

      {numerocamisas <= 3 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El valor total es de ${valortotal} menos el descuento del 10% que
          equivalen a ${valor1} le queda en ${valortotal - valor1}{" "}
        </h3>
      ) : null}
      {numerocamisas > 3 && numerocamisas < 5 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El valor total es de ${valortotal} menos el descuento del 20% que
          equivalen a ${valor2} le queda en ${valortotal - valor2}{" "}
        </h3>
      ) : null}
      {numerocamisas >= 5 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El valor total es de ${valortotal} menos el descuento del 40% que
          equivalen a ${valor3} le queda en ${valortotal - valor3}{" "}
        </h3>
      ) : null}
    </div>
  );
}

export default Ejercicio9;
