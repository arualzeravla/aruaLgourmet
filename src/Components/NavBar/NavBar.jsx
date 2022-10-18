import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./navbar.css";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md nav_headerContainer">
                <div className="container-fluid">
                    <Link to={"/"} ><h1 id="siteTitle">aruaL gourmet</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">INICIO</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to={"/menu"} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> MENÚ </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={"/categoria/principales"}>Platos Principales</Link>
                                    <Link className="dropdown-item" to={"/categoria/postres"}>Postres</Link>
                                </div>
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