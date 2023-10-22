import NavBar from '../../../Components/NavBar/NavBar';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import './Cuenta.css';
import { useState } from 'react';

function Cuenta() {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [contrasenaActual, setContrasenaActual] = useState('');
	const [nuevaContrasena, setNuevaContrasena] = useState('');
	const [repetirNuevaContrasena, setRepetirNuevaContrasena] = useState('');

	const handleGuardarCambios = () => {
		// Aquí puedes agregar la lógica para guardar los cambios, por ejemplo, hacer una solicitud al servidor.
	};

	return (
		<>
			<NavBar
				imagen={Logo}
				pathMain='MainPageUser'
				pathCarrito='CarritoDeCompras'
				pathCuenta='Cuenta'
				pathGaleria='GalleryUser'
				pathTienda='MainPageEcomerceUser'
				mostrarCarrito={true}
			/>

			<div className='configuracion-usuario'>
				<button className='login-button' onClick={handleGuardarCambios}>
					Guardar Cambios
				</button>
				<div className='cuenta-opciones'>
					<div className='lado-izq-cuenta'>
						<h3>Configuración de Perfil</h3>
						<label>Nombre:</label>
						<input
							type='text'
							value={nombre}
							onChange={e => setNombre(e.target.value)}
						/>
						<label>Correo:</label>
						<input
							type='email'
							value={correo}
							onChange={e => setCorreo(e.target.value)}
						/>
						<label>Contraseña Actual:</label>
						<input
							type='password'
							value={contrasenaActual}
							onChange={e => setContrasenaActual(e.target.value)}
						/>
					</div>
					<div className='lado-der-contrasena'>
						<h3>Cambiar Contraseña</h3>
						<label>Nueva Contraseña:</label>
						<input
							type='password'
							value={nuevaContrasena}
							onChange={e => setNuevaContrasena(e.target.value)}
						/>
						<label>Repetir Nueva Contraseña:</label>
						<input
							type='password'
							value={repetirNuevaContrasena}
							onChange={e => setRepetirNuevaContrasena(e.target.value)}
						/>
						<label>Contraseña Actual:</label>
						<input
							type='password'
							value={contrasenaActual}
							onChange={e => setContrasenaActual(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Cuenta;
