import NavBar from '../../../Components/NavBar/NavBar';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import { useState } from 'react';
import productosJSON from './Gallery.json';
import PreviewGallery from '../../../Components/preview-gallery/preview-gallery.js';
import Maquillaje from '../../../Imagenes/Acerca-de-nosotros.png';
import PopUpUser from './pop-up-user/PopupUser.js';
function GalleryUser() {
	//const [searchTerm, setSearchTerm] = useState('');
	const [galleryItem, setGalleryItems] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	// Función para filtrar los elementos de la galería según la categoría seleccionada

	const uniqueCategories = [
		...new Set(productosJSON.map(producto => producto.categoria)),
	];

	const filteredProductos = selectedCategory
		? productosJSON.filter(
				producto =>
					producto.categoria === selectedCategory &&
					producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  )
		: productosJSON.filter(producto =>
				producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  );
	return (
		<>
			<NavBar
				imagen={Logo}
				pathMain='MainPageUser'
				pathCarrito='CarritoDeCompras'
				pathCuenta='Cuenta'
				pathGaleria='GalleryUser'
				pathTienda='MainPageEcomerceUser'
				mostrarCarrito={true}
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
					<input
						className='search-bar' // Agrega la clase CSS aquí
						type='text'
						placeholder='Buscar producto'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className='productos-container'>
					{filteredProductos.map((producto, index) => (
						<PreviewGallery
							key={index}
							imagen={Maquillaje} // {producto.imagen}
							titulo={producto.titulo}
							onClick={() => {
								setGalleryItems(producto); // Establecer el producto seleccionado
								setPopUpOpen(true); // Abrir el pop-up al hacer clic
							}}
						/>
					))}
				</div>
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

export default GalleryUser;
