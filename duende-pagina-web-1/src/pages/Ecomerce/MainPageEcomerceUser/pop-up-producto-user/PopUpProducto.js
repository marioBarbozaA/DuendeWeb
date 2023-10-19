import React, { useState } from 'react';
import './PopUpProducto.css';
import Producto from '../../../../Imagenes/Aretes.png';
import CantidadCounter from '../../../../Components/CantidadCounter/CantidadCounter.js';

import IconButton from '../../../../Components/Buttons/Button.js';

function PopUpProducto({ producto, onClose }) {
	const [cantidad, setCantidad] = useState(0); // Estado para la cantidad seleccionada

	if (!producto) {
		return null; // No mostrar el pop-up si no hay producto seleccionado
	}

	const handleAgregarAlCarrito = () => {
		// Lógica para agregar el producto al carrito con la cantidad seleccionada (cantidad)
	};

	return (
		<div className='popup-container'>
			<div className='popup-content'>
				<div className='left-side-popup'>
					<img
						src={Producto}
						alt={
							producto.subtitulo
						} /*src={producto.imagen} alt={producto.subtitulo}*/
					/>
					<div className='fotos-producto-pequennas'>
						{/*<img
							src={Producto}
							alt={
								producto.subtitulo
							} 
						/>
						<img
							src={Producto}
							alt={
								producto.subtitulo
							} 
						/>*/}
					</div>
				</div>
				<div className='right-side-popup'>
					<div className='cerrar-boton'>
						<IconButton
							buttonText='X'
							buttonClassname='login-button'
							handleOnClick={onClose}
						/>
					</div>
					<h2>{producto.subtitulo}</h2>
					<p className='texto-pequenno-pop-up'>
						Categoría: {producto.categoria}
					</p>
					<p className='Descripcion-pop-up'>{producto.descripcion}</p>
					<p className='texto-pequenno-pop-up'>
						Disponibles: {producto.cantidadDisponible}
					</p>
					<p className='texto-pequenno-pop-up'>Estado: {producto.estado}</p>
					<div className='cantidad-control'>
						<h2> ${producto.precio}</h2>
						<CantidadCounter
							stock={producto.cantidadDisponible}
							cantidad={cantidad} // La cantidad actual
							onCantidadChange={setCantidad} // La función para cambiar la cantidad
						/>
					</div>
					<IconButton
						buttonText='Agregar al Carrito'
						buttonClassname='popup-button'
						handleOnClick={() => handleAgregarAlCarrito(cantidad)}
					/>
				</div>
			</div>
		</div>
	);
}

export default PopUpProducto;
