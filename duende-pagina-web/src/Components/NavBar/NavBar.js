import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav
            className="navbar navbar-expand-lg navbar-dark p-3"
            style={{ background: "var(--color-moradito)" }}
          >
            <div className="container">

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Tienda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create" className="nav-link">
                      Galería
                    </Link>
                  </li>
                </ul>
              </div>

              <Link className="navbar-brand" to="/">
                <img src="../../Imagenes/Logo-Duende.png" />
              </Link>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Log out
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create" className="nav-link">
                      Cuenta
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">
                      Carrito
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

