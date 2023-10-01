import React from 'react';
//import Duende from "../../../Imagenes/Acerca-de-nosotros.png";
import "./MainPageUser.css"
import NavBar from '../../../Components/NavBar/NavBar';

function MainPageUser() {
    return (
      <div className='MainPageUser-container'>
        <NavBar/>
        <section className="bienvenida-section">
        <div className="contenedor-bienvenida">
        <div className="texto-Bienvenida">
              <h2>Bienvenidos a Duende</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget nunc id nulla vestibulum faucibus. Maecenas in risus eget elit
                sodales convallis nec eget leo. Etiam lacinia ut neque nec
                ullamcorper.
              </p>
              <a href="#leer-mas">Leer Más</a>
            </div>
            </div>
        </section>
        </div>
      );
    

    }

export default MainPageUser;