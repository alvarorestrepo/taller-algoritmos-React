import React, { useState } from "react";

function Ejercicio10() {
  const [years, changeYears] = useState(0);
  const [salario, guardarSalario] = useState(0);

  const numeroYears = (e) => {
    changeYears(parseInt(e.target.value));
  };
  const salarioMensual = (e) => {
    guardarSalario(parseInt(e.target.value));
  };
  let valor1 = (salario * 5) / 100;
  let valor2 = (salario * 7) / 100;
  let valor3 = (salario * 10) / 100;
  let valor4 = (salario * 15) / 100;
  let valor5 = (salario * 20) / 100;

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Ejercicio 10</h1>
      <p className="text-gray-700 text-base m-4 ">
        10. Calcular la prima que un accionista recibe en el reparto anual de
        utilidades en una empresa si este se asigna calculando un porcentaje de
        su salario mensual que depende de su antigüedad en la empresa de acuerdo
        con la siguiente tabla: TIEMPO ----------------------------------- •
        Menos de 1 año • 1 año o más y menos de 2 años • 2 años o más y menos de
        5 años • 5 años o más y menos de 10 años • 10 años o más UTILIDAD
        ------------------- • 5 % del salario • 7 % del salario • 10 % del
        salario • 15 % del salario • 20 % del salario
      </p>

      <div className="flex">
        <div className="p-3 bg-gray-200 border text-gray-700">
          <span>#</span>
        </div>
        <input
          type="number"
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Años laborados"
          onChange={numeroYears}
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
          placeholder="Escriba su salario"
          onChange={salarioMensual}
        />
      </div>

      {years < 1 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Su prima este año es de: ${valor1}
        </h3>
      ) : null}
      {years >= 1 && years < 2 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Su prima este año es de: ${valor2}
        </h3>
      ) : null}
      {years >= 2 && years < 5 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Su prima este año es de: ${valor3}
        </h3>
      ) : null}
      {years >= 5 && years < 10 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Su prima este año es de: ${valor4}
        </h3>
      ) : null}
      {years >= 10 ? (
        <h3 className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
          Su prima este año es de: ${valor5}
        </h3>
      ) : null}
    </div>
  );
}

export default Ejercicio10;
