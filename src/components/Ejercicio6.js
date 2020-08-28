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
        <div className='container' >
            <h1>Ejercicio 6</h1>
            <p>6.	Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su
            promedio de tres calificaciones es mayor o igual a 3.5; en caso contrario reprobara.</p>

            <div className="row">
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba la nota del primer corte"
                        onChange={num1} autoFocus />
                </div>
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba la nota del segundo corte"
                        onChange={num2} autoFocus />
                </div>
                <div className="col-4 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba la nota del tercer corte"
                        onChange={num3} autoFocus />
                </div>
            </div>
            <h3>Tu promedio es: {promedio}</h3>
            {promedio >= 3.5
                ? <h2>Acabas de Aprobar</h2>
                : <h2>Acabas de Reprobar</h2>}
        </div>
    )
}

export default Ejercicio6
