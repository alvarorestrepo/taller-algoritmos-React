import React, { useState } from 'react'

function Ejercicio4() {

    const [numero1, guardarNumero1] = useState(0);
    const [numero2, guardarNumero2] = useState(0);

    const num1 = e => {
        guardarNumero1(parseInt(e.target.value))

    }
    const num2 = e => {
        guardarNumero2(parseInt(e.target.value))
    }
    return (
        <div className='container'>
            <h1>Ejercicio 4</h1>
            <p>
                4.	Crear un algoritmo que lea dos números y luego imprima un mensaje en pantalla indicando si los
                números introducidos son iguales o diferentes.
            </p>
            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={num1} autoFocus />
                </div>
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={num2} autoFocus />
                </div>
            </div>
            {numero1 === numero2
                ? <h1>Los Numero son Iguales</h1>
                : <h1>Los Numero son Diferentes</h1>}
        </div>
    )
}

export default Ejercicio4
