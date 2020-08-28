import React, { useState } from 'react'

function Ejercicio6() {


    const [nume1, guardarNumero1] = useState(0)
    const [nume2, guardarNumero2] = useState(0)
    const [nume3, guardarNumero3] = useState(0)

    const num1 = e => {
        guardarNumero1(parseFloat(e.target.value))
    }
    const num2 = e => {
        guardarNumero2(parseFloat(e.target.value))
    }
    const num3 = e => {
        guardarNumero3(parseFloat(e.target.value))
    }
    const promedio = (nume1 + nume2 + nume3) / 3
    return (
        <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl" >
            <h1 className='font-bold text-xl mb-2 text-center'>Ejercicio 6</h1>
            <p className='text-gray-700 text-base m-4'>6.	Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su
            promedio de tres calificaciones es mayor o igual a 3.5; en caso contrario reprobara.</p>

            <div className="flex mt-3">
                <div className="p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba la nota del primer corte"
                    onChange={num1} autoFocus />
            </div>
            <div className="flex mt-3">
                <div className="p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba la nota del segundo corte"
                    onChange={num2} autoFocus />
            </div>
            <div className="flex mt-3">
                <div className="p-3 bg-gray-200 border text-gray-700">
                    <span>#</span>
                </div>
                <input
                    type="number"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Escriba la nota del tercer corte"
                    onChange={num3} autoFocus />
            </div>
            <h3 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>Tu promedio es: {promedio}</h3>
            {promedio >= 3.5
                ? <h2 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>Acabas de Aprobar</h2>
                : <h2 className='mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2'>Acabas de Reprobar</h2>}
        </div>
    )
}

export default Ejercicio6
