import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const FormatearCantidad = (cantidad) => {

        return cantidad.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span>{FormatearCantidad(presupuesto)}
                </p>

                <p>
                    <span>Disponible: </span>{FormatearCantidad(0)}
                </p>

                <p>
                    <span>Gastado: </span>{FormatearCantidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto