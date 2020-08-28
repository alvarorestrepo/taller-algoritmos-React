import React, { useState } from 'react'

function Ejercicio7() {
    const [numero, guardarNumero] = useState(0)

    const descuento = e => {
        guardarNumero(parseFloat(e.target.value))
    }
    const valorDescuento = (numero * 20) / 100;

    return (
        <div className='container'>
            <h1>Ejercicio 7</h1>
            <p>7.	En un almacén se hace un 20 % de descuento a los clientes cuya compra supere los $5000;
            ¿cuál será la cantidad que pagara una persona por su compra?</p>

            <div className="row">
                <div className="col-6 input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escriba un numero"
                        onChange={descuento} autoFocus />
                </div>
            </div>
            {numero > 5000
                ? <h3>El valor a pagar es de: ${numero - valorDescuento}</h3>
                : null}
        </div>
    )
}

export default Ejercicio7
