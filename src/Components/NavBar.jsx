import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md nav_headerContainer">
                <div className="container-fluid">
                    <h1 id="siteTitle">aruaL gourmet</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MENÚ</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">PARA REGALAR</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">COMBO SEMANA</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">PEDIDOS</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget />
        </div >
    )

}

export default NavBar;