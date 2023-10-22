import NavBar from '../../../Components/NavBar/NavBar';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import { useState } from 'react';
import productosJSON from '../GalleryUser/Gallery.json';
import PreviewGallery from '../../../Components/preview-gallery-admin/preview-gallery-admin.js';
import Maquillaje from '../../../Imagenes/Acerca-de-nosotros.png';
import PopUpUser from './pop-up-admin/PopupAdmin.js';
import IconButton from '../../../Components/Buttons/Button';
import PopUpAnnadir from './pop-up-annadir-imagen/PopupAnnadir.js';
import './GalleryAdmin.css';
function GalleryAdmin() {
	//const [searchTerm, setSearchTerm] = useState('');
	const [galleryItem, setGalleryItems] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [popUpAgregarProductoOpen, setPopUpAgregarProductoOpen] =
		useState(false); // Estado para el pop-up "Añadir Producto"
	const [searchTerm, setSearchTerm] = useState('');

	const handleOpenAgregarProducto = () => {
		setPopUpAgregarProductoOpen(true); // Abre el pop-up "Añadir Producto" al hacer clic
	};
	const uniqueCategories = [
		...new Set(productosJSON.map(producto => producto.categoria)),
	];
	// Filtra los productos por categoría
	const filteredProductos = selectedCategory
		? productosJSON.filter(
				producto =>
					producto.categoria === selectedCategory &&
					producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  )
		: productosJSON.filter(producto =>
				producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  );

	const handleAgregarProducto = nuevoProducto => {
		// Aquí debes implementar la lógica para agregar el nuevo producto a tus datos (por ejemplo, productosJSON)
		// Luego, cierra el pop-up de "Añadir Producto"
		setPopUpAgregarProductoOpen(false);
	};
	const handleCloseAgregarProducto = () => {
		setPopUpAgregarProductoOpen(false); // Cierra el pop-up "Añadir Producto"
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
				<h1>Galería Duende</h1>
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
				</div>
				<div className='botones-gallery-admin'>
					<IconButton
						buttonClassname='login-button'
						buttonText='Añadir Imagen'
						handleOnClick={handleOpenAgregarProducto}
					/>
				</div>
				<input
					className='search-bar'
					type='text'
					placeholder='Buscar producto'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<div className='productos-container'>
					{filteredProductos.map((producto, index) => (
						<PreviewGallery
							key={index}
							imagen={Maquillaje} // {producto.imagen}
							titulo={producto.titulo}
							onClick={() => {
								setGalleryItems(producto); // Establecer el producto seleccionado
								setPopUpOpen(true); // Abrir el pop-up al hacer clic en la imagen
							}}
						/>
					))}
				</div>
				{/* Mostrar el pop-up de "Añadir Producto" si está abierto */}
				{popUpAgregarProductoOpen && (
					<PopUpAnnadir
						onClose={handleCloseAgregarProducto}
						onProductoCreate={handleAgregarProducto}
					/>
				)}
				{popUpOpen && (
					<PopUpUser
						producto={galleryItem} // Pasa el producto seleccionado al pop-up
						onClose={() => setPopUpOpen(false)}
					/>
				)}
				<Footer />
			</div>
		</>
	);
}

export default GalleryAdmin;
