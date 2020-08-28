import React, { useState } from 'react'

const Ejercicio1 = () => {

    const [cantidad, guardarCantidad] = useState(0);
    const [validar, cambiarValidar] = useState('No hay numero');

    const positivoNegativo = e => {
        guardarCantidad(parseInt(e.target.value))

        if (parseInt(e.target.value) === 0) {
            cambiarValidar('es cero')
            console.log(cantidad);
            return;
        } else if (parseInt(e.target.value) > 0) {
            cambiarValidar('es positivo')
            console.log(cantidad);
            return;
        } else if (parseInt(e.target.value) < 0) {
            cambiarValidar('es negativo')
            console.log(cantidad);
            return;
        } else if (isNaN(parseInt(e.target.value)))
            cambiarValidar('No hay numero')
        console.log(cantidad);
    }



    return (
        <div className='container mt-5'>

            <h1>Ejercicio 1</h1>
            <p>1.	Crear un algoritmo que reciba un número y muestre si es positivo, negativo o es el número cero.</p>
            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={positivoNegativo} autoFocus />
                </div>
            </div>


            <h1>{cantidad}</h1>
            <h1>{validar}</h1>

        </div>
    )
}

export default Ejercicio1
