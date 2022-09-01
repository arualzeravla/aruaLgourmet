import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md nav_headerContainer">
                <div class="container-fluid">
                    <h1 id="siteTitle">aruaL gourmet</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">MENÚ</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">PARA REGALAR</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">COMBO SEMANA</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">PEDIDOS</a>
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