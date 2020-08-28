import React, { useState } from 'react'

function Ejercicio5() {


    const [nume1, guardarNum1] = useState(0)
    const [nume2, guardarNum2] = useState(0)
    const [nume3, guardarNum3] = useState(0)

    const num1 = e => {
        guardarNum1(parseInt(e.target.value))
    }
    const num2 = e => {
        guardarNum2(parseInt(e.target.value))
    }
    const num3 = e => {
        guardarNum3(parseInt(e.target.value))
    }

    return (
        <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
            <h1 className='font-bold text-xl mb-2 text-center'>Ejercicio 5</h1>
            <p className='text-gray-700 text-base m-4 '>5.	Crear un algoritmo que lea tres números y luego imprima un mensaje
            indicando cual es el mayor de los números introducidos. </p>


            <div className="flex mt-3">
                <div className=" p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba un numero"
                    onChange={num1} autoFocus />
            </div>
            <div className="flex mt-3">
                <div className=" p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba un numero"
                    onChange={num2} autoFocus />
            </div>
            <div className="flex mt-3">
                <div className="p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba un numero"
                    onChange={num3} autoFocus />
            </div>

            {nume1 > nume2 && nume1 > nume3

                ? <h1 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>El {nume1} es el mayor</h1>

                : null}

            {nume3 > nume2 && nume3 > nume1

                ? <h1 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>El {nume3} es el mayor</h1>

                : null}

            {nume2 > nume1 && nume2 > nume3

                ? <h1 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>El {nume2} es el mayor</h1>

                : null}

            {nume2 === nume1 && nume2 === nume3 && nume3 === nume1

                ? <h1 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>Todos son Iguales</h1>

                : null}
        </div>
    )
}

export default Ejercicio5
