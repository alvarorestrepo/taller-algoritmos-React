import React, { useState } from 'react'

const Ejercicio2 = () => {

    const [cantidad, nuevaCantidad] = useState(0)
    const [validar, cambiarValidar] = useState('No hay numero')

    const parOimpar = e => {
        nuevaCantidad(parseInt(e.target.value));

        if (parseInt(e.target.value) % 2 === 0) {
            cambiarValidar('Es Par')
        } else {
            cambiarValidar('Es Impar')
        }
    }

    return (
        <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
            <h1 className='font-bold text-xl mb-2 text-center'>Ejercicio 2</h1>
            <p className='text-gray-700 text-base m-4 '>2.	Crear un algoritmo que reciba un número y muestre si el numero introducido es par o impar. (utilizar operador mod).</p>

            <div className="flex">
                <div className="p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                    type="number"
                    placeholder="Escriba un numero"
                    onChange={parOimpar} autoFocus />
            </div>

            <h1 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>{validar}</h1>

        </div>
    )
}

export default Ejercicio2
