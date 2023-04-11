import React from 'react'
import {Link} from 'react-router-dom'

function Navegacion () {
  return (
    <div>
      <header className="menu">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/">
              <img src='./mis_notas.png' alt='mis_notas' width="150"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="listarnotas">Notas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="agregarnota">Agregar Nota</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navegacion
