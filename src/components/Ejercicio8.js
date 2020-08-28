import React, { useState } from "react";

function Ejercicio8() {
  const [hora, cambioHora] = useState(0);

  const horas = (e) => {
    cambioHora(parseInt(e.target.value));
  };

  let valorHora1 = hora * 2000;
  let valorHora2 = (hora - 40) * 1000;

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 8</h1>
      <p className="text-gray-700 text-base m-4 ">
        8. Un obrero necesita calcular su salario semanal, el cual se obtiene de
        la siguiente manera: • Si trabaja 40 horas o menos se le paga $2000 por
        hora. • Si trabaja más de 40 horas se le paga $2000 por cada una de las
        primeras 40 horas y $3000 por cada hora extra.
      </p>
      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Escriba sus hora de trabajo"
          onChange={horas}
          autoFocus
        />
      </div>
      {hora <= 40 ? (
        <h2 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El salario por esta semana es de: ${valorHora1}
        </h2>
      ) : (
        <h2 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          El salario por esta semana es de: ${valorHora2 + valorHora1}
        </h2>
      )}
    </div>
  );
}

export default Ejercicio8;
