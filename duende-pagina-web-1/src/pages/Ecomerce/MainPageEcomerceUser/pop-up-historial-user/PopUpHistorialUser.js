import './PopUpHistorialUser.css';
import IconButton from '../../../../Components/Buttons/Button.js';
//import React, { useState } from 'react';

function PopUpHistorialUser(props) {
	//const [cantidad, setCantidad] = useState(0); // Estado para la cantidad seleccionada
	const { onClose } = props;
	return (
		<div className='popup-container-historial'>
			<div className='popup-content-historial'>
				<div className='cerrar-boton'></div>
				<div className='left-side-popup-historial'>
					<h2>#1506</h2>
					<p>Nombre del Usuario: nombreUsuario</p>
					<p>Correo del Usuario: marionetabar3344@gmail.com</p>
					<p>Teléfono del Usuario: telefonoUsuario</p>
					<p>Dirección de Envío: direccion</p>
					<p>Fecha de Compra: fechaCompra</p>
					<div className='comprobante-imagen'>
						<p>Comprobante:</p>
						<img src='https://i.imgur.com/2ZQ4UZB.png' alt='Comprobante' />
					</div>
				</div>
				<div className='right-side-popup-historial'>
					<IconButton
						buttonText='X'
						buttonClassname='login-button'
						handleOnClick={onClose}
					/>
					<h3>Cliente ID: clienteId</h3>
					<table className='productos-table-historial'>
						<thead>
							<tr>
								<th>Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Producto 1</td>
								<td>$20.00</td>
								<td>6</td>
							</tr>
							<tr>
								<td>Producto 2</td>
								<td>$15.00</td>
								<td>5</td>
							</tr>
							{/* Agrega más filas según sea necesario */}
						</tbody>
					</table>
					<p>Costo de Envío: $5.00</p>
					<p>IVA: 10%</p>
					<p>Total General: $45.00</p>
					<p>Fecha de Entrega: fechaEntrega</p>
					<p>Nota: nota || '-'</p>
					<p>Estado: estado</p>
				</div>
			</div>
		</div>
	);
}

export default PopUpHistorialUser;
