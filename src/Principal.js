import React from 'react'
import 'animate.css';
import Informacion from './components/Informacion';
import Informador from './components/informador';
import './css/principal.css'
import Footer from './components/Footer';

const Principal = () =>{
    return(
        <>
            <Informacion/>
            <Informador/>
            <Footer/>
        </>
        
    );
} 

export default Principal