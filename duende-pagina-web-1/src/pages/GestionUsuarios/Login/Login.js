import React from 'react';
import IconButton from '../../../Components/Buttons/Button.js'; // Asegúrate de proporcionar la ruta correcta al archivo de tu componente IconButton
import InputText from '../../../Components/Inputs/InputText.js';
import Fondo from '../../../Imagenes/Fondo-Login.png';
import instagram from '../../../Imagenes/instagram.png';
import './Login.css';

function Login() {
	const handleLogin = () => {
		// Lógica para manejar el inicio de sesión
	};

	return (
		<div className='login-container'>
			<div className='left-side'>
				{/* Utiliza las imágenes importadas */}
				<img src={Fondo} alt='Imagen de inicio de sesión' />
			</div>
			<div className='right-side'>
				<div className='login-box'>
					<h2>Iniciar Sesión</h2>
					<form>
						<div className='form-login'>
							<InputText
								labelText='Correo Electrónico'
								inputClassname='form-login'
								typeInput='email'
								idInput='email'
								inputName='email'
								className='input-login'
							/>
						</div>
						<div className='form-login'>
							<InputText
								labelText='Contraseña'
								inputClassname='form-login'
								typeInput='password'
								idInput='password'
								inputName='password'
								className='input-login'
							/>
						</div>
						<div className='opciones-login'>
							<a href='/Recuperacion'>Recuperar Contraseña</a>
							<a href='/Register'>Registrarse</a>
						</div>
						<IconButton
							buttonText='Iniciar Sesión'
							buttonClassname='login-button'
							handleOnClick={handleLogin}
						/>
					</form>
				</div>
				<div className='instagram-icon'>
					{/* Aquí puedes colocar el icono de Instagram */}
					<img src={instagram} alt='Icono de Instagram' />
				</div>
			</div>
		</div>
	);
}

export default Login;
