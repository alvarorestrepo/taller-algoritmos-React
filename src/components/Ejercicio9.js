import React, { useState } from 'react'

function Ejercicio9() {

    const [numerocamisas, guardarNumeroCamisas] = useState(0)
    const [valorcamisas, guardarValorCamisas] = useState(0)

    const numeroCamisa = e => {
        guardarNumeroCamisas(parseInt(e.target.value))
    }
    const valorCamisas = e => {
        guardarValorCamisas(parseInt(e.target.value))
    }
    let valortotal = numerocamisas * valorcamisas
    let valor1 = ((valortotal) * 10) / 100
    let valor2 = ((valortotal) * 20) / 100
    let valor3 = ((valortotal) * 40) / 100

    return (
        <div className='container'>
            <h1>Ejercicio 9</h1>
            <p>9.	Calcule el total a pagar por la compra de camisas.

            •	Si se compran 3 o menos camisas se le aplica un descuento del 10%.
            •	Si se compran más de 3 pero menos de 5 camisas se le aplica un 20% de descuento.
            •	Si se compran 5 o más obtiene un descuento del 40%.</p>

            <div className="row">
                <div className="col-3 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba numero camisas"
                        onChange={numeroCamisa} autoFocus />
                </div>
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba el valor por cada camisa"
                        onChange={valorCamisas} />
                </div>
            </div>
            {numerocamisas <= 3
                ? <h3>El valor total es de ${valortotal} menos el descuento del 10% que equivalen a ${valor1} le queda en ${valortotal - valor1} </h3>
                : null
            }
            {numerocamisas > 3 && numerocamisas < 5
                ? <h3>El valor total es de ${valortotal} menos el descuento del 20% que equivalen a ${valor2} le queda en ${valortotal - valor2} </h3>
                : null
            }
            {numerocamisas >= 5
                ? <h3>El valor total es de ${valortotal} menos el descuento del 40% que equivalen a ${valor3} le queda en ${valortotal - valor3} </h3>
                : null
            }
        </div>
    )
}

export default Ejercicio9
