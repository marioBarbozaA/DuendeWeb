import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
    const pathTienda = props.pathTienda;
    const pathGaleria = props.pathGaleria;
    const pathMain = props.pathMain;
    const pathCuenta = props.pathCuenta;
    const pathCarrito = props.pathCarrito
        return (
            <nav
            className="navbar navbar-expand-lg navbar-dark p-3"
            style={{ background: "var(--color-moradito)" }}
          >
            <div className="container">

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to={`/${pathTienda}`}className="nav-link">
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
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'plugin:react/jsx-runtime',
    // Add a comma here
  ],
  rules: {}
};

