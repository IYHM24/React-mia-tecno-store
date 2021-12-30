import React from 'react';
import PropTypes from 'prop-types';


const Jumbotron = ({titulo, parrafo}) =>{
    return(
        <div className="jumbotron jumbotron-fluid text-center m-3 animate__animated animate__fadeInDown" id="bienvenidatxt">
            <div className="container">
                <h1><strong>{titulo}</strong></h1>
                <p>{parrafo}</p>
            </div>
        </div>
    )
}

export default Jumbotron;

Jumbotron.propTypes = {
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired
}

Jumbotron.defaultProps = {
    titulo: '<"Titulo mensaje">',
    parrafo: '<"cuerpo mensaje">'
}