import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
           <div class="container-fluid">
                <div class="row p-5 text-white" style={{ background: "var(--color-moradito)" }}>
                    <div class="col-xs-12 col-md-6 col-lg-3">
                        <p class="h3 mb-3">Contacto</p>
                        <div class="mb-2">
                        <p class="text-white ">+506 2222-2222</p>    
                        </div>
                        <div class="mb-2">
                        <p class="text-white ">duende@gmail.com</p>
                        </div>

                    </div>                            
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <p class="h3 mb-3">Contenido</p>
                    <div class="mb-2">
                        <Link to="#" class="text-white ">Tienda</Link>    
                        </div>
                        <div class="mb-2">
                        <Link to="#"class="text-white ">Galeria</Link>
                        </div>
                    </div>                
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <a class="d-inline-flex align-items-center mb-2" href="/">Columna 3</a>
                    <img src="../../Imagenes/Logo-Duende.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-top"/>
                    </div>                
               
                </div>
           </div>
        )
    }
}