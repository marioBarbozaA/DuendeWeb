import React, { useState } from 'react';
import IconButton from '../../../Components/Buttons/Button.js';
import PreviewProducto from '../../../Components/preview-producto/preview-producto.js';
import productosJSON from '../MainPageEcomerceUser/productos.json';
import Producto from '../../../Imagenes/Aretes.png';
import NavBar from '../../../Components/NavBar/NavBar.js';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import PopUpProductoAdmin from '../MainPageEcomerceAdmin/pop-up-producto-admin/PopUpProductoAdmin.js';
import PopupAnnadirProducto from '../MainPageEcomerceAdmin/pop-up-annadir-producto/PopupAnnadirProducto.js';
import { Link } from 'react-router-dom';
import './MainPageEcomerceAdmin.css';

function MainPageEcomerceAdmin() {
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null); // Agrega un estado para el producto seleccionado
	const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada

	const [popUpAgregarProductoOpen, setPopUpAgregarProductoOpen] =
		useState(false); // Estado para el pop-up "Añadir Producto"
	const [searchTerm, setSearchTerm] = useState('');

	const uniqueCategories = [
		...new Set(productosJSON.map(producto => producto.categoria)),
	];

	// Filtra los productos por categoría
	// Filtra los productos por categoría
	const filteredProductos = selectedCategory
		? productosJSON.filter(
				producto =>
					producto.categoria === selectedCategory &&
					producto.subtitulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  )
		: productosJSON.filter(producto =>
				producto.subtitulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  );

	const handleOpenAgregarProducto = () => {
		setPopUpAgregarProductoOpen(true); // Abre el pop-up "Añadir Producto" al hacer clic
	};

	const handleCloseAgregarProducto = () => {
		setPopUpAgregarProductoOpen(false); // Cierra el pop-up "Añadir Producto"
	};
	// Función para manejar la lógica de agregar un nuevo producto (debes implementarla)
	const handleAgregarProducto = nuevoProducto => {
		// Aquí debes implementar la lógica para agregar el nuevo producto a tus datos (por ejemplo, productosJSON)
		// Luego, cierra el pop-up de "Añadir Producto"
		setPopUpAgregarProductoOpen(false);
	};
	return (
		<>
			<NavBar
				imagen={Logo}
				pathMain='MainPageAdmin'
				pathCarrito='CarritoDeCompras'
				pathCuenta='CuentaAdmin'
				pathGaleria='GalleryAdmin'
				pathTienda='MainPageEcomerceAdmin'
				mostrarCarrito={false}
			/>
			<div className='MainPageEcomerce-container'>
				<h1>Productos</h1>
				<div className='filtros-boton-container'>
					<select
						value={selectedCategory}
						onChange={e => setSelectedCategory(e.target.value)}
					>
						<option value=''>Todas las categorías</option>
						{uniqueCategories.map(categoria => (
							<option key={categoria} value={categoria}>
								{categoria}
							</option>
						))}
					</select>
					<div className='botones-ecomerce-admin'>
						<IconButton
							buttonClassname='login-button'
							buttonText='Añadir Producto'
							handleOnClick={handleOpenAgregarProducto}
						/>

						<Link to='/HistorialVentas' className='nav-link'>
							<IconButton
								buttonClassname='login-button'
								buttonText='Registrar Compra'
							/>
						</Link>
						<input
							className='search-bar'
							type='text'
							placeholder='Buscar producto'
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
						/>
					</div>
				</div>

				{/* Mapea los productos desde el JSON y crea un componente PreviewProducto para cada uno */}
				<div className='productos-container'>
					{filteredProductos.map((producto, index) => (
						<PreviewProducto
							key={index}
							imagen={Producto} // {producto.imagen}
							subtitulo={producto.subtitulo}
							mostrarCarrito={false}
							precio={producto.precio}
							onClick={() => {
								setSelectedProduct(producto); // Establecer el producto seleccionado
								setPopUpOpen(true); // Abrir el pop-up al hacer clic
								console.log(producto);
							}}
						/>
					))}
				</div>
				{/* Mostrar el pop-up de "Añadir Producto" si está abierto */}
				{popUpAgregarProductoOpen && (
					<PopupAnnadirProducto
						onClose={handleCloseAgregarProducto}
						onProductoCreate={handleAgregarProducto}
					/>
				)}
				{/* Mostrar el pop-up si está abierto y pasa los datos del producto */}
				{popUpOpen && (
					<PopUpProductoAdmin
						producto={selectedProduct} // Pasa el producto seleccionado al pop-up
						onClose={() => setPopUpOpen(false)}
					/>
				)}
				<Footer />
			</div>
		</>
	);
}

export default MainPageEcomerceAdmin;
