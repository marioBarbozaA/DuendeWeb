import React from 'react';
import '../Login/Login.css'; // Asegúrate de tener un archivo CSS para estilizar este componente
import IconButton from '../../../Components/Buttons/Button.js'; // Asegúrate de proporcionar la ruta correcta al archivo de tu componente IconButton
import InputText from "../../../Components/Inputs/InputText.js";
import Fondo from "../../../Imagenes/Fondo-Login.png";
import instagram from "../../../Imagenes/instagram.png"


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
            <InputText labelText="Nombre completo" inputClassname="form-login" 
              typeInput="text" idInput="nombre" inputName="nombre"/>
            </div>
            <div className="form-login">
            <InputText labelText="Correo Electrónico" inputClassname="form-login" 
              typeInput="email" idInput="email" inputName="email"/>
            </div>
            <div className="form-login">
            <InputText labelText="Teléfono" inputClassname="form-login" 
              typeInput="text" idInput="telefono" inputName="telefono"/>

            </div>
            <div className="form-login">
            <InputText labelText="Contraseña" inputClassname="form-login" 
              typeInput="password" idInput="password" inputName="password"/>
            </div>
            <div className="form-login">
            <InputText labelText="Confirmar contraseña" inputClassname="form-login" 
              typeInput="password" idInput="password" inputName="password"/>
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
