import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
    
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
                <img src={props.imagen} alt="logo" />
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

export default NavBar;

