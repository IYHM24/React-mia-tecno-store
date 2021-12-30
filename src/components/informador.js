import React from 'react'
import noticias from '../img/noticias.png'
import novedades from '../img/Certificados_digitales-firmaprofesional-main.png'
import consejo from '../img/consejo.png'
import entrega from '../img/entrega.png'


const Informador = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="container text-center mb-5">
                <h2><strong>Asi de facil es hacer tu compra con nostoros!</strong></h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-3 articulo text-center">
                    <div className="container d-flex justify-content-center">
                        <img src={novedades}  alt="Novedades" width="100px"/>
                    </div>
                    <p>Registrate, navega y encuentra tus productos</p>
                </div>
                <div className="col-sm-3 articulo text-center">
                    <div className="container d-flex justify-content-center ">
                        <img src={noticias} alt="Noticias" width="100px"/>
                    </div>
                    <p>Añade tus productos a la canasta e ingresa tu metodo de pago</p>
                </div>
                <div className="col-sm-3 articulo text-center">
                    <div className="Container d-flex justify-content-center">
                        <img src={consejo} alt="Consejo" width="100px"/>
                    </div>
                    <p>En el transcurso de la semana se enviaran tus productos a la puerta de tu casa</p>
                </div>
                <div className="col-sm-3 articulo text-center">
                    <div className="Container d-flex justify-content-center ">
                        <img src={entrega} alt="Consejo" width="100px"/>
                    </div>
                    <p>Disfruta de tu producto! y evalua tu experiencia con nosotros</p>
                </div>
            </div>
        </div>
    );
}


export default Informador;