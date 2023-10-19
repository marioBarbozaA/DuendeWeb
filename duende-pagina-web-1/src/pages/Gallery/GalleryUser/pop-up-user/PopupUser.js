import './PopupUser.css';
import Producto from '../../../../Imagenes/Acerca-de-nosotros.png';
import IconButton from '../../../../Components/Buttons/Button.js';

function PopUpUser({ producto, onClose }) {
	if (!producto) {
		return null; // No mostrar el pop-up si no hay producto seleccionado
	}

	return (
		<div className='popup-container-gallery'>
			<div className='popup-content-gallery'>
				<div className='left-side-popup-gallery'>
					<img
						src={Producto}
						alt={
							producto.subtitulo
						} /*src={producto.imagen} alt={producto.subtitulo}*/
					/>
				</div>

				<div className='right-side-popup'>
					<div className='cerrar-boton'>
						<IconButton
							buttonText='X'
							buttonClassname='login-button'
							handleOnClick={onClose}
						/>
					</div>
					<div className='titulo-maquillaje-container'>
						<h2 className='titulo-maquillaje'>{producto.titulo}</h2>
					</div>
					<h3 className='texto-categoria'>{producto.categoria}</h3>
					<p className='Descripcion-maquillaje'>{producto.descripcion}</p>
					<p className='texto-pequenno-pop-up'>{producto.subcategoria}</p>
					<p className='texto-pequenno-pop-up'>{producto.etiquetas}</p>
					<p className='texto-pequenno-pop-up'> {producto.fecha}</p>
					{/* Nuevo div "mensaje-duende" */}
					<div className='mensaje-duende'>
						<p>¿Quieres un maquillaje de {producto.titulo}?</p>
						<input type='text' placeholder='Nombre' />
						<div className='input-correo-telefono'>
							<input type='text' placeholder='Correo electrónico' />
							<input type='text' placeholder='Teléfono' />
						</div>
						<textarea placeholder='Mensaje'></textarea>
						<IconButton
							buttonText='Contratar Servicio'
							buttonClassname='popup-button'
							handleOnClick={() => console.log('Contratar Servicio')}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopUpUser;
