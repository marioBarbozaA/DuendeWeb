import React from 'react';
import '../Login/Login.css'; // Asegúrate de tener un archivo CSS para estilizar este componente
import IconButton from '../Buttons/Button.js'; // Asegúrate de proporcionar la ruta correcta al archivo de tu componente IconButton
import Fondo from "../../Imagenes/Fondo-Login.png";
import instagram from "../../Imagenes/instagram.png"


function Registro() {
  const handleRegister = () => {
    // Lógica para manejar el registro
  };

  return (
    <div className="login-container">
      <div className="left-side">
        {/* Utiliza las imágenes importadas o el contenido que desees */}
        <img src={Fondo} alt="Imagen de registro" />
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>Registrarse</h2>
          <form>
            <div className="form-login">
              <h3 className="subtitulo-logins" >Nombre</h3>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-login">
            <h3 className="subtitulo-logins" >Correo Electrónico</h3>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="form-login">
            <h3 className="subtitulo-logins" >Teléfono</h3>
              <input type="text" id="telefono" name="telefono" required />
            </div>
            <div className="form-login">
            <h3 className="subtitulo-logins" >Contraseña</h3>
              <input type="password" id="contraseña" name="contraseña" required />
            </div>
            <div className="form-login">
            <h3 className="subtitulo-logins" >Confirmar Contraseña</h3>
              <input
                type="password"
                id="confirmarContraseña"
                name="confirmarContraseña"
                required
              />
            </div>
            <IconButton
              buttonText="Registrar"
              buttonClassname="login-button"
              handleOnClick={handleRegister}
              // Agrega el ícono deseado aquí
            />
          </form>
        </div>
        <div className="instagram-icon">
          {/* Aquí puedes colocar el icono de Instagram o el contenido deseado */}
          <img src={instagram} alt="Icono de Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Registro;
