import React, {useState}from 'react'
import './Estilo.css'


export const Header = () => {
    const [dark,setDark]=useState(false)

    const handleDarkmode=()=>{
        setDark(!dark)
    }
    return (
        <div>
            <h1>Hola Soy Header</h1>
            <br/>
            <button onClick={handleDarkmode}>{dark ?  'Estado modo oscuro':'Estado modo luz'}</button>
            
            
            
        </div>
    )
}


