import React from 'react';
import '../Login/Login.css'; // Asegúrate de tener un archivo CSS para estilizar este componente
import IconButton from '../../Buttons/Button.js'; // Asegúrate de proporcionar la ruta correcta al archivo de tu componente IconButton
import Fondo from "../../../Imagenes/Fondo-Login.png";
import instagram from "../../../Imagenes/instagram.png";

function Recuperacion() {
  const handleRecovery = () => {
    // Lógica para manejar la recuperación de contraseña
  };

  return (
    <div className="login-container">
      <div className="left-side">
        {/* Utiliza las imágenes importadas o el contenido que desees */}
        <img src={Fondo} alt="Imagen de recuperación de contraseña" />
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>Recuperar Contraseña</h2>
          <form>
            <div className="form-login">
              <h3 className="subtitulo-logins">Correo Electrónico</h3>
              <input type="email" id="correo" name="correo" required />
            </div>
            <IconButton
              buttonText="Enviar"
              buttonClassname="login-button"
              handleOnClick={handleRecovery}
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

export default Recuperacion;
