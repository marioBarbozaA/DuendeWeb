import React, { useState } from 'react';
import './PopupVentas.css';
import IconButton from '../../../../Components/Buttons/Button.js';

function PopUpHistorialUser(props) {
	const { onClose } = props;
	const [estado, setEstado] = useState('Aceptado');
	const [notas, setNotas] = useState(''); // Inicialmente, las notas están en blanco

	const handleEstadoChange = e => {
		setEstado(e.target.value);
	};

	const handleNotasChange = e => {
		setNotas(e.target.value);
	};

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
					{/* Uso de input para las notas y select para el estado */}
					<p>Notas:</p>
					<input
						type='text'
						value={notas}
						onChange={handleNotasChange}
						placeholder='Agregar notas...'
					/>
					<p>Estado:</p>
					<select
						value={estado}
						onChange={handleEstadoChange}
						style={{
							color:
								estado === 'Aceptado'
									? 'green'
									: estado === 'Pendiente'
									? 'yellow'
									: 'red',
							backgroundColor:
								estado === 'Aceptado'
									? 'black'
									: estado === 'Pendiente'
									? 'black'
									: 'black',
							border:
								estado === 'Aceptado'
									? '2px solid green'
									: estado === 'Pendiente'
									? '2px solid yellow'
									: '2px solid red',
						}}
					>
						<option value='Aceptado'>Aceptado</option>
						<option value='Pendiente'>Pendiente</option>
						<option value='Rechazado'>Rechazado</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default PopUpHistorialUser;
