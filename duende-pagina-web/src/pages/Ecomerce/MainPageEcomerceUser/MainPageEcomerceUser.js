import React, {useState} from 'react';
import IconButton from '../../../Components/Buttons/Button.js';
import PreviewProducto from '../../../Components/preview-producto/preview-producto.js'; 
import productosJSON from './productos.json'; 
import Producto from '../../../Imagenes/Aretes.png';
import NavBar from '../../../Components/NavBar/NavBar.js'; 
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import PopUpProducto from '../MainPageEcomerceUser/pop-up-producto-user/PopUpProducto.js';
import './MainPageEcomerceUser.css';




function MainPageEcomerceUser() {
const [popUpOpen, setPopUpOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null); // Agrega un estado para el producto seleccionado
  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
  };

  return (
    <>
    <NavBar imagen= {Logo}/>
    <div className='MainPageEcomerce-container'>
      <h1>Productos</h1>
      <div className='filtros-boton-container'>
        <div className='filtros-container'>
          <IconButton
            buttonClassname="login-button"
            handleOnClick={handleLogin}
            buttonText="Ver Historial"
          />
        </div>
      </div>

      {/* Mapea los productos desde el JSON y crea un componente PreviewProducto para cada uno */}
      <div className="productos-container">
        {productosJSON.map((producto, index) => (
          <PreviewProducto
            key={index}
            imagen={Producto} // {producto.imagen}
            subtitulo={producto.subtitulo}
            precio={producto.precio}
            onClick={() => {
              setSelectedProduct(producto); // Establecer el producto seleccionado
              setPopUpOpen(true); // Abrir el pop-up al hacer clic
            
                console.log(producto);
            }}
          />
        ))}
      </div>

      {/* Mostrar el pop-up si está abierto y pasa los datos del producto */}
      {popUpOpen && (
        <PopUpProducto
          producto={selectedProduct} // Pasa el producto seleccionado al pop-up
          onClose={() => setPopUpOpen(false)}
        />
      )}
      <Footer/>
    </div>
    </>
  );
}

export default MainPageEcomerceUser;
