import './App.css';

function App() {
  


  return (
    <>
    <header>
        <nav class="navbar navbar-expand-md nav_headerContainer">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="index.html"><img class="img_logo" src="img/Logo.jpg" alt="LA BIBLIOTECA"></img></a> */}
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
                            <a class="nav-link" href="promociones.html">MENÚ</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="promociones.html">PARA REGALAR</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="promociones.html">COMBO SEMANA</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">PEDIDOS</a>
                        </li>


                    </ul>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Buscar" aria-label="Search"></input>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    <div id="imgDiv">
    <img src="./images/ad1-bigpic.jpg" alt="image" className="ad-img" /> 
    </div>
    </>
  );
}

export default App;
