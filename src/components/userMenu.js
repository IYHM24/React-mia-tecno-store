import React from 'react'

const UserMenu = () => {
    try {
        const user = localStorage.getItem("user").type
        return (
            <>
                <li className="nav-item">
                    <a className="nav-link" id="boton-modal" href="Acceder">{user.name}</a>
                </li>
            </>
        );
    } catch (error) {
        return (
            <>
                <div className=" mt-2 nav-item ">
                    <a className="nav-link" id="boton-modal" href="Acceder" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acceder"><i className="large material-icons" >account_circle</i></a>
                </div>
            </>
        )
    }
}


export default UserMenu;