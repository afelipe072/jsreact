import React,{useState} from 'react'
import PropTypes from 'prop-types'

// Andrés Felipe Rojas
//1741787
const ComponenteParcial = ({numero1,numero2,nombre}) => {

    const [resultadoOperacion,setResultadoOperacion]=useState('')

    const restar =()=>{
        const resultado = numero1-numero2
        setResultadoOperacion(`Señor ${nombre} la resta es: ${resultado} `)
    }
    const sumar=()=>{
        const resultado= numero1+numero2
        setResultadoOperacion(`Señor ${nombre} la suma es: ${resultado}`)
    }

    return (
        <div className='container'>
            
            <h1 className='text-center'>{`Los numeros son X1: ${numero1} y X2: ${numero2} `}</h1>
            <button className='mr-2' onClick={sumar}>Sumar</button>

            <button onClick={restar}>Restar </button>

            <h3>{resultadoOperacion}</h3>
            
        </div>
    )
}

ComponenteParcial.propTypes = {
    numero1: PropTypes.number.isRequired,
    numero2: PropTypes.number.isRequired
}

export default ComponenteParcial
