import React from 'react';
import IconButton from '../Buttons/Button.js';
import carrito from '../../Imagenes/add-to-cart.png';
import './preview-producto.css';

function PreviewProducto({
	imagen,
	subtitulo,
	precio,
	onClick,
	mostrarCarrito = true,
}) {
	const onAgregarCarrito = () => {
		// Lógica para manejar el inicio de sesión
	};
	return (
		<div className='preview-producto' onClick={onClick}>
			<div className='imgProducto'>
				<img src={imagen} alt='Producto' />
			</div>
			<h3>{subtitulo}</h3>
			<div className='precio-boton'>
				<h3>${precio}</h3>
				{mostrarCarrito && (
					<IconButton
						icon={carrito}
						buttonClassname='login-button'
						handleOnClick={onAgregarCarrito}
						// Puedes agregar un ícono apropiado para el carrito como prop si lo deseas
					/>
				)}
			</div>
		</div>
	);
}

export default PreviewProducto;
