import React from 'react'
import './css/acceder.css'

const Acceder = () => {

    const enviarDatos = () => {
        console.log(`enviar`);
    }

    const handleInputChange = () => {
        console.log(`obtener`);
    }

    return (
        <>
            <div className="mt-5 animate__animated animate__fadeIn d-none d-lg-block">
                <div className="container border p-5 shadow p-3 mb-2 bg-body rounded mt-5 contenedor">
                    <div className="container text-center my-3">
                        <h2>Inicio de sesion</h2>
                    </div>
                    <form onSubmit={enviarDatos}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" className="form-control" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input name="pwd" type="password" className="form-control" onChange={handleInputChange} />
                        </div>
                        <button id="boton" type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                    </form>
                </div>
                <div className="container border shadow p-3 mb-5 bg-body rounded p-3 contenedor text-center mt-1">
                    <p><strong>¿sin cuenta?</strong> tranquilo puedes registrate <a href="/registro">clickeando aca</a></p>
                </div>
            </div>
            <div className="mt-5 animate__animated animate__fadeIn d-sm-block d-lg-none">
                <div className="container p-5 mb-2 mt-5">
                    <div className="container text-center my-3">
                        <h2>Inicio de sesion</h2>
                    </div>
                    <form onSubmit={enviarDatos}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" className="form-control" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input name="pwd" type="password" className="form-control" onChange={handleInputChange} />
                        </div>
                        <button id="boton" type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                    </form>
                </div>
                <div className="container p-3 mb-5 text-center mt-1">
                    <p><strong>¿sin cuenta?</strong> tranquilo puedes registrate <a href="/registro">clickeando aca</a></p>
                </div>
            </div>
        </>
    );
}

export default Acceder