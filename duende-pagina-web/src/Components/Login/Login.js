import React from 'react';
import IconButton from '../Buttons/Button.js'; // Asegúrate de proporcionar la ruta correcta al archivo de tu componente IconButton
import Fondo from "../../Imagenes/Fondo-Login.png";
import instagram from "../../Imagenes/instagram.png"
import './Login.css'


function Login() {
  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
  };

  return (
    <div className="login-container">
      <div className="left-side">
        {/* Utiliza las imágenes importadas */}
        <img src={Fondo} alt="Imagen de inicio de sesión" />
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="form-login">
              <h3 className="subtitulo-logins">
                Correo Electrónico
              </h3>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-login">
              <h3 className="subtitulo-logins">
                Contraseña
              </h3>
              <input type="password" 
                id="password"
                name="password" 
                required />
            </div>
            <div className="opciones-login">
              <a href="/">Recuperar Contraseña</a>
              <a href="/">Registrarse</a>
            </div>
            <IconButton
              buttonText="Iniciar Sesión"
              buttonClassname="login-button"
              handleOnClick={handleLogin}
            />
          </form>
        </div>
        <div className="instagram-icon">
          {/* Aquí puedes colocar el icono de Instagram */}
          <img src={instagram} alt="Icono de Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Login;