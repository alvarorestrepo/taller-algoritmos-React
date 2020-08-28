import React, { useState } from 'react'

function Ejercicio8() {

    const [hora, cambioHora] = useState(0)

    const horas = e => {
        cambioHora(parseInt(e.target.value));
    }

    let valorHora1 = hora * 2000
    let valorHora2 = (hora - 40) * 1000


    return (
        <div className='container'>
            <h1>Ejercicio 8</h1>
            <p>
                8.	Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente
                manera:

                •	Si trabaja 40 horas o menos se le paga $2000 por hora.
                •	Si trabaja más de 40 horas se le paga $2000 por cada una de las primeras 40 horas
                y $3000 por cada hora extra.
            </p>
            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba sus hora de trabajo"
                        onChange={horas} autoFocus />
                </div>
            </div>
            {hora <= 40
                ? <h2>El salario por esta semana es de: ${valorHora1}</h2>
                : <h2>El salario por esta semana es de: ${valorHora2 + valorHora1}</h2>}
        </div>
    )
}

export default Ejercicio8
