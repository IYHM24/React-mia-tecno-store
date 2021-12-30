import React from 'react';
import logo from '../img/logo.png'
import UserMenu from './userMenu';
import '../css/Header.css'

const Header = () => {
    return (
        <>
            <header>
                <nav className=" navbar navbar-expand-sm bg-primary navbar-dark d-flex justify-content-center px-5 navbar-toggleable-md" id="cabecera-menu">
                    <button
                        className="navbar-toggler navbar-toggler-right d-sm-block d-lg-none"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ><i className="material-icons">menu</i></button>
                    <a className="navbar-brand px-5" href="/">
                        <img src={logo} alt="logo" width="60px" className="d-inline-block align-top" />
                    </a>
                    <div className="navbar-nav d-sm-block d-lg-none">
                        <UserMenu />
                    </div>
                    <ul className="navbar-nav mx-5 d-sm-none d-lg-flex">
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link" href="/">Tienda</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link" href="/">Locales</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link" href="/">Contactanos</a>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <a className="nav-link" href="/">Aliados</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-1 d-none d-lg-block" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success d-none d-lg-block" type="submit">Search</button>
                    </form>
                    <div className="mx-5 navbar-nav d-none d-lg-block">
                        <UserMenu />
                    </div>
                </nav>
            </header>
            <div className="collapse navbar-light p-2" id="navbarTogglerDemo01">
                <ul className="navbar-nav mx-5">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Tienda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Locales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contactanos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Aliados</a>
                    </li>
                    <form className="d-flex py-2">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </>
    );
}

export default Header;