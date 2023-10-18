import React, { useState } from 'react';
import NavBar from '../../../../Components/NavBar/NavBar.js';
import Footer from '../../../../Components/Footer/Footer.js';
import Logo from '../../../../Imagenes/Logo-Duende.png';
import PopupVentas from '../pop-up-ventas/PopupVentas.js'; // Importa el nuevo componente
import './HistorialVentas.css';

function HistorialVentas() {
	// Supongamos que tienes un arreglo de compras del usuario
	const compras = [
		{
			id: 1,
			fechaCompra: '2023-09-15',
			estado: 'Aprobado',
			pago: 50.0,
			nota: 'Compra realizada',
		},
		{
			id: 2,
			fechaCompra: '2023-09-10',
			estado: 'Pendiente',
			pago: 25.0,
			nota: '',
		},
		{
			id: 3,
			fechaCompra: '2023-09-05',
			estado: 'Rechazado',
			pago: 30.0,
			nota: 'Producto agotado',
		},
		// Agrega más compras si es necesario
	];
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [selectedCompra, setSelectedCompra] = useState(null);

	// Función para mostrar el popup con los detalles de la compra
	const mostrarPopup = compra => {
		setSelectedCompra(compra);
		setPopUpOpen(true);
	};

	return (
		<>
			<NavBar
				imagen={Logo}
				pathMain='MainPageAdmin'
				pathCarrito='CarritoDeCompras'
				pathCuenta='Cuenta'
				pathGaleria='GalleryUser'
				pathTienda='MainPageEcomerceAdmin'
				mostrarCarrito={false}
			/>
			<div className='container-historial'>
				<h1>Ventas</h1>
				<table className='historial-table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Fecha</th>
							<th>Estado</th>
							<th>Pago</th>
							<th>Nota</th>
						</tr>
					</thead>
					<tbody>
						{compras.map(compra => (
							<tr
								key={compra.id}
								onClick={() => mostrarPopup(compra)}
								className='compras-opciones'
							>
								<td className='id-casilla'>{compra.id}</td>
								<td>{compra.fechaCompra}</td>
								<td>{compra.estado}</td>
								<td>${compra.pago.toFixed(2)}</td>
								<td className='nota-casilla'>{compra.nota || '-'}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Footer />

			{/* Popup de detalles de la compra */}
			{popUpOpen && (
				<PopupVentas
					compra={selectedCompra}
					onClose={() => {
						setPopUpOpen(false); // Abrir el pop-up al hacer clic
						console.log(popUpOpen);
					}}
				/>
			)}
		</>
	);
}

export default HistorialVentas;
