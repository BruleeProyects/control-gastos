import React, {useState, useEffect} from 'react'
import { FormatearCantidad } from '../helpers'

const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {


    }, [gastos])
    

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
                    <span>Disponible: </span>{FormatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado: </span>{FormatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto