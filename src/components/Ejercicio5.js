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
        <div className="container">
            <h1>Ejercicio 5</h1>
            <p>5.	Crear un algoritmo que lea tres números y luego imprima un mensaje
            indicando cual es el mayor de los números introducidos. </p>

            <div className="row">
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={num1} autoFocus />
                </div>
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={num2} autoFocus />
                </div>
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={num3} autoFocus />
                </div>
            </div>
            {nume1 > nume2 && nume1 > nume3

                ? <h1>El {nume1} es el mayor</h1>

                : null}

            {nume3 > nume2 && nume3 > nume1

                ? <h1>El {nume3} es el mayor</h1>

                : null}

            {nume2 > nume1 && nume2 > nume3

                ? <h1>El {nume2} es el mayor</h1>

                : null}

            {nume2 === nume1 && nume2 === nume3 && nume3 === nume1

                ? <h1>Todos son Iguales</h1>

                : null}
        </div>
    )
}

export default Ejercicio5
