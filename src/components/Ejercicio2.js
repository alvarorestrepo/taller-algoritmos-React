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
        <div className='container'>
            <h1>Ejercicio 2</h1>
            <p>2.	Crear un algoritmo que reciba un número y muestre si el numero introducido es par o impar. (utilizar operador mod).</p>

            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={parOimpar} autoFocus />
                </div>
            </div>
            <h1>{validar}</h1>

        </div>
    )
}

export default Ejercicio2
