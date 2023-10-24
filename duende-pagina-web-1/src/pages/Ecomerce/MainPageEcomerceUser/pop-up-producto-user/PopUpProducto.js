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
	console.log(producto);
	return (
		<div className='popup-container'>
			<div className='popup-content'>
				<div className='left-side-popup'>
					<img
						src={producto.mainImage ? `${process.env.REACT_APP_BACKEND_URL}${producto.mainImage.url}` : ''}
						alt={producto.mainImage ? producto.mainImage.altText || producto.name : producto.name}
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
					<h2>{producto.name}</h2>
					<p className='texto-pequenno-pop-up'>
						Categoría: {producto.category}
					</p>
					<p className='Descripcion-pop-up'>{producto.description}</p>
					<p className='texto-pequenno-pop-up'>
						Disponibles: {producto.stock}
					</p>
					<p className='texto-pequenno-pop-up'>Estado: {producto.status}</p>
					<div className='cantidad-control'>
						<h2> ${producto.price}</h2>
						<CantidadCounter
							stock={producto.stock}
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
