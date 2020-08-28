import React, { useState } from 'react'

function Ejercicio3() {

    const [numero, cambiarNumero] = useState(0);

    const cuantasCifras = e => {
        cambiarNumero(e.target.value);

    }

    return (
        <div className='container'>
            <h1>Ejercicio 3</h1>
            <p>3.	Crear un algoritmo que lea un número y luego imprima un mensaje indicando
        si el número introducido es de 1, 2 o 3 cifras.</p>
            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={cuantasCifras} autoFocus />
                </div>
            </div>
            <h1>El numero es de {numero.length} cifras</h1>
        </div>
    )
}

export default Ejercicio3
