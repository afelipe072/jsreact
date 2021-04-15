//Leonardo Bolaños García 1826808

import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteParcial from './components/ComponenteParcial'


const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteParcial numero1={10} numero2={5} nombre="Felipe" />, divRoot);
