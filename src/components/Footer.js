import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid pt-5 pb-4 mt-5 animate__animated animate__fadeIn" id="footer">
            <div className="container text-center">
                <h5><strong>sigenos en nuestras redes sociales</strong></h5>
            </div>
            <div className="container d-flex justify-content-center">
                <button className="btn  d-flex justify-content-center" id="fb-btn"><img src='../assets/facebook.png' alt="Facebook-logo" width="30px"/></button>
                <button className="btn mx-2 d-flex justify-content-center" id="in-btn"><img src='../assets/instagram.png' alt="Instagram-logo" width="30px"/></button>
            </div>
            <div className="container text-center mt-2">
                <p>
                Mia Tecno Store | © CopyRight todos los derechos reservados
                </p>
            </div>
        </div>
    )
}

export default Footer
