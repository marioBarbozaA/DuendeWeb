import React, { useState } from 'react';
import IconButton from '../../../../Components/Buttons/Button.js';
import CantidadCounter from '../../../../Components/CantidadCounter/CantidadCounter.js'; // Importa el componente de contador de cantidad
import NavBar from '../../../../Components/NavBar/NavBar.js';
import Producto from '../../../../Imagenes/Aretes.png';
import trash from '../../../../Imagenes/trash1.png';
import Logo from '../../../../Imagenes/Logo-Duende.png';
import Footer from '../../../../Components/Footer/Footer.js';

import './CarritoDeCompras.css'; // Importa el archivo CSS para estilizar

function CarritoDeCompras() {
	// Lista de productos en el carrito (ejemplo de datos)
	const [carrito, setCarrito] = useState([
		{
			id: 1,
			imagen: 'URL_imagen_1',
			subtitulo: 'Producto 1',
			precio: 20.99,
			cantidad: 2,
		},
		{
			id: 2,
			imagen: 'URL_imagen_2',
			subtitulo: 'Producto 2',
			precio: 15.49,
			cantidad: 1,
		},
		// Agrega más productos según sea necesario
	]);

	// Función para eliminar un producto del carrito
	const eliminarProducto = id => {
		const nuevoCarrito = carrito.filter(producto => producto.id !== id);
		setCarrito(nuevoCarrito);
	};

	// Función para actualizar la cantidad de un producto en el carrito
	const actualizarCantidad = (id, nuevaCantidad) => {
		const nuevoCarrito = carrito.map(producto => {
			if (producto.id === id) {
				return { ...producto, cantidad: nuevaCantidad };
			}
			return producto;
		});
		setCarrito(nuevoCarrito);
	};

	// Función para calcular el total del carrito
	const calcularTotal = () => {
		let total = 0;
		carrito.forEach(producto => {
			total += producto.precio * producto.cantidad;
		});
		return total.toFixed(2); // Redondea el total a 2 decimales
	};

	return (
		<>
			<div className='carrito-general'>
				<NavBar imagen={Logo} />

				<div className='carrito-container'>
					<h1>Carrito de Compras</h1>
					{carrito.length === 0 ? ( // Verifica si el carrito está vacío
						<p className='carrito-vacio'>No tienes productos en tu carrito.</p>
					) : (
						<table className='tabla-carrito'>
							<thead>
								<tr>
									<th>Imagen</th>
									<th>Subtitulo</th>
									<th>Precio</th>
									<th>Cantidad</th>
									<th>Total</th>
									<th>Eliminar</th>
								</tr>
							</thead>
							<tbody>
								{carrito.map(producto => (
									<tr key={producto.id}>
										<td className='casilla-producto'>
											<img src={Producto} alt={producto.subtitulo} />
										</td>
										<td>{producto.subtitulo}</td>
										<td>${producto.precio.toFixed(2)}</td>
										<td>
											<CantidadCounter
												cantidad={producto.cantidad}
												onCantidadChange={nuevaCantidad =>
													actualizarCantidad(producto.id, nuevaCantidad)
												}
											/>
										</td>
										<td className='total-casilla'>
											${(producto.precio * producto.cantidad).toFixed(2)}
										</td>
										<td className='borrar-producto'>
											<IconButton
												buttonClassname='login-button'
												handleOnClick={() => eliminarProducto(producto.id)}
												icon={trash}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
					<div className='total-general'>
						<p>Total General:</p>
						<p>${calcularTotal()}</p>
					</div>
					<div className='realizar-compra'>
						<IconButton
							buttonText='Realizar Compra'
							buttonClassname='login-button '
							// Agrega la lógica para realizar la compra
						/>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default CarritoDeCompras;
