import NavBar from '../../../Components/NavBar/NavBar';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import { useState, useEffect } from 'react';
import PreviewGallery from '../../../Components/preview-gallery/preview-gallery.js';
import Maquillaje from '../../../Imagenes/Acerca-de-nosotros.png';
import PopUpUser from './pop-up-user/PopupUser.js';

import Axios from 'axios'; 

function GalleryUser() {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const [galleryItem, setGalleryItems] = useState([]);
	// Función para filtrar los elementos de la galería según la categoría seleccionada
	 
	 useEffect(() => {
		// Realiza una solicitud a la API para obtener los makeups
		Axios.get('http://localhost:3500/gallery/getAllImages')
		  .then((response) => {
			setGalleryItems(response.data);
		  })
		  .catch((error) => {
			console.error('Error al obtener makeups:', error);
		  });
	  }, []);


	const uniqueCategories = [
		...new Set(galleryItem.map(makeup => makeup.categoria)),
	];

	const filteredItems = selectedCategory
		
		? galleryItem.filter(
				makeup =>
					makeup.categoria === selectedCategory &&
					makeup.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
		  )
		: galleryItem.filter(makeup =>
				makeup.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
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
						placeholder='Buscar makeup'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className='makeups-container'>
					{filteredItems.map((makeup, index) => (
						<PreviewGallery
							key={index}
							imagen={Maquillaje} // {makeup.imagen}
							titulo={makeup.titulo}
							onClick={() => {
								setGalleryItems(makeup); // Establecer el makeup seleccionado
								setPopUpOpen(true); // Abrir el pop-up al hacer clic
							}}
						/>
					))}
				</div>
				{popUpOpen && (
					<PopUpUser
						makeup={galleryItem} // Pasa el makeup seleccionado al pop-up
						onClose={() => setPopUpOpen(false)}
					/>
				)}
				<Footer />
			</div>
		</>
	);
}

export default GalleryUser;
