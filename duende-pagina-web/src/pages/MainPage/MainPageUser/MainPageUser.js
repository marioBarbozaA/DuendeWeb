import React from 'react';
import ModulosMainPage from '../../../Components/ModulosMainPage/ModulosMainPage.js';
import Duende from "../../../Imagenes/Acerca-de-nosotros.png";
import "./MainPageUser.css"
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import Curso from "../../../Imagenes/graduation.png";
import CarritoG from "../../../Imagenes/shopping-cart.png";
import Galeria from "../../../Imagenes/make-up.png";
import Logo from "../../../Imagenes/Logo-Duende.png";


function MainPageUser() {
    return (
      <div className='MainPageUser-container'>
        <NavBar imagen = {Logo} />
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

        <section className="modulos-section">
          <div className="contenedor-Modulos">
            <ModulosMainPage 
              title="Cursos duende"
              text='¡Bienvenidos a nuestra sección de cursos de maquillaje! Aquí encontrarás una amplia variedad de programas diseñados para ayudarte a descubrir y perfeccionar tus habilidades en el emocionante mundo del maquillaje. Ya seas un principiante que busca aprender los conceptos básicos o un profesional en busca de técnicas avanzadas, tenemos algo para ti.'
              imageUrl={Curso}
              linkTo='/'/>
  
            <ModulosMainPage 
              title="Tienda duende"
              text='¡Te damos la bienvenida a nuestra Tienda Exclusiva de Belleza y Productos de Lujo! Aquí encontrarás una cuidadosa selección de artículos de alta calidad que abarcan mucho más que el maquillaje. Nuestra tienda ofrece una experiencia de compra única, donde podrás descubrir productos de belleza, cuidado personal y accesorios de lujo.'
              imageUrl={CarritoG}
              linkTo='/'/>

              <ModulosMainPage 
                title="Galería duende"
                text='Nuestra galería de maquillaje es un espacio dedicado a la creatividad y el arte de la belleza. Aquí, podrás inspirarte con una colección de obras maestras de maquillaje. Explora una amplia gama de estilos, desde maquillaje de fantasía y body painting hasta looks de pasarela y belleza cotidiana.'
                imageUrl={Galeria}
                linkTo='/'/>
                
              </div>
        </section>

        <section className="acerca-de-nosotros-section">
          <div className="acerca-de-nosotros-content">
            <h2 className='acerca-de-nosotros-title'>Acerca de Nosotros</h2>
            <div className="creadora-info">
              <p>En Concepción de Tres Ríos, Duende Maquillista es la cuna de la creatividad en maquillaje. Nuestra fundadora, una apasionada del arte de la caracterización, transforma rostros en obras de arte, desde catrinas misteriosas hasta icónicos villanos. Ofrecemos servicios de maquillaje profesional, cursos de automaquillaje y una tienda repleta de productos de belleza y accesorios. Únete a nosotros en este viaje donde la belleza y la imaginación se entrelazan en cada trazo.</p>
              <img src={Duende} alt="Imagen de la Creadora" />
            </div>
          </div>
    </section>
    <Footer/>
        </div>

      );
    

    }

export default MainPageUser;