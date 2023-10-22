import React, { useState, useEffect } from 'react';
import IconButton from '../../../Components/Buttons/Button.js';
import PreviewProducto from '../../../Components/preview-producto/preview-producto.js';
import NavBar from '../../../Components/NavBar/NavBar.js';
import Logo from '../../../Imagenes/Logo-Duende.png';
import Footer from '../../../Components/Footer/Footer';
import PopUpProductoAdmin from '../MainPageEcomerceAdmin/pop-up-producto-admin/PopUpProductoAdmin.js';
import PopupAnnadirProducto from '../MainPageEcomerceAdmin/pop-up-annadir-producto/PopupAnnadirProducto.js';
import { Link } from 'react-router-dom';
import './MainPageEcomerceAdmin.css';

//backend
import axios from 'axios';

function MainPageEcomerceAdmin() {
	const [popUpOpen, setPopUpOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null); // Agrega un estado para el producto seleccionado
	const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada

	const [popUpAgregarProductoOpen, setPopUpAgregarProductoOpen] =
		useState(false); // Estado para el pop-up "Añadir Producto"
	const [searchTerm, setSearchTerm] = useState('');

	//backend
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://localhost:3500/product/admin');
			setProducts(response.data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
        fetchProducts();
    }, []);

	///////////

	const uniqueCategories = [
		...new Set(products.map(product => product.category)),
	];

	// Filtra los productos por categoría
	const filteredProducts = selectedCategory
    ? products.filter(
        product =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    : products.filter(product =>
        product.name.toLowerCase( ).includes(searchTerm.toLowerCase()),
    );

	const handleOpenAgregarProducto = () => {
		setPopUpAgregarProductoOpen(true); // Abre el pop-up "Añadir Producto" al hacer clic
	};

	// Función para manejar la lógica de agregar un nuevo producto (debes implementarla)
	const handleAgregarProducto = nuevoProducto => {
		setPopUpAgregarProductoOpen(false);
	};

	const handleUpdateProducto = async productoActualizado => {
		try {
			const res = await axios.put(`http://localhost:3500/product/admin/${productoActualizado._id}`, productoActualizado);
			console.log(res);
			console.log(res.data);
			fetchProducts();
		} catch (error) {
			console.error('Error updating product:', error);
		}
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
					{filteredProducts.map((product, index) => (
						<PreviewProducto
							key={product._id || index}
							mainImageUrl={product.mainImage} // {product.mainImage.url}
							name={product.name}
							mostrarCarrito={false}
							price={product.price}
							onClick={() => {
								setSelectedProduct(product);
								setPopUpOpen(true);
								console.log(product);
							}}
						/>
					))}
				</div>
				{/* Mostrar el pop-up de "Añadir Producto" si está abierto */}
				{popUpAgregarProductoOpen && (
					<PopupAnnadirProducto
						onClose={() => setPopUpAgregarProductoOpen(false)}
						onProductoCreate={handleAgregarProducto}
					/>
				)}
				{/* Mostrar el pop-up si está abierto y pasa los datos del producto */}
				{popUpOpen && (
					<PopUpProductoAdmin
						product={selectedProduct} // updated from producto
						onClose={() => setPopUpOpen(false)}
						onProductoChange={handleUpdateProducto}
					/>
				)}
				<Footer />
			</div>
		</>
	);
}

export default MainPageEcomerceAdmin;
