import React, { useState } from 'react';
import './PopupAnnadirProducto.css'; // Asegúrate de tener el archivo CSS correcto

import IconButton from '../../../../Components/Buttons/Button.js';

function PopupAnnadirProducto({ onClose, onProductoCreate }) {
	const [nuevoProducto, setNuevoProducto] = useState({
		subtitulo: '',
		categoria: '',
		descripcion: '',
		estado: 'disponible',
		precio: '', // Establecer el precio inicial en 0 u otro valor predeterminado
		cantidadDisponible: '', // Establecer la cantidad inicial en 0 u otro valor predeterminado
	});

	const handleFieldChange = (fieldName, value) => {
		setNuevoProducto({ ...nuevoProducto, [fieldName]: value });
	};

	const handleCreateProduct = () => {
		onProductoCreate(nuevoProducto);
	};

	const handleImageChange = e => {
		const imageFile = e.target.files[0]; // Obtener el archivo de imagen seleccionado
		setNuevoProducto({ ...nuevoProducto, imagen: imageFile });
	};

	const quitarImagen = () => {
		console.log('Quitar imagen llamado'); // Verificar si la función se llama correctamente
		setNuevoProducto({ ...nuevoProducto, imagen: null });
	};

	return (
		<div className='popup-container'>
			<div className='popup-content'>
				<div className='left-side-popup'>
					{nuevoProducto.imagen ? (
						<img
							src={URL.createObjectURL(nuevoProducto.imagen)}
							alt={nuevoProducto.subtitulo}
						/>
					) : (
						<label className='image-input-label'>
							<input
								type='file'
								accept='image/*'
								onChange={handleImageChange}
							/>
							<span className='input-icon'>+</span>
						</label>
					)}
					<div className='fotos-producto-pequennas'>
						{/* Esta este div si se quieren añadir más imagenes */}
						<div className='image-control'>
							{/*<IconButton
								buttonText='+'
								buttonClassname='popup-button'
								onClick={agregarImagen}
							/*/}
							<button className='popup-button' onClick={quitarImagen}>
								-
							</button>
						</div>
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
					<h2 className='texto-h2-pop-up'>
						<input
							type='text'
							value={nuevoProducto.subtitulo}
							placeholder='Titulo'
							onChange={e => handleFieldChange('subtitulo', e.target.value)}
						/>
					</h2>

					<p className='texto-pequenno-pop-up'>
						<input
							type='text'
							placeholder='Categoria'
							value={nuevoProducto.categoria}
							onChange={e => handleFieldChange('categoria', e.target.value)}
						/>
					</p>
					<p className='Descripcion-pop-up'>
						<textarea
							placeholder='Descripcion'
							value={nuevoProducto.descripcion}
							onChange={e => handleFieldChange('descripcion', e.target.value)}
						/>
					</p>

					<p className='texto-pequenno-pop-up'>
						<select
							placeholder='Estado'
							value={nuevoProducto.estado}
							onChange={e => handleFieldChange('estado', e.target.value)}
						>
							<option value='disponible'>Disponible</option>
							<option value='agotado'>Agotado</option>
						</select>
					</p>
					<h2 className='cantidad-control'>
						<input
							placeholder='Precio'
							type='number'
							value={nuevoProducto.precio}
							onChange={e =>
								handleFieldChange(
									'precio',
									Math.max(0, parseFloat(e.target.value)),
								)
							}
							min='0' // Establece el valor mínimo a 0
						/>
						<input
							type='number'
							placeholder='Cantidad'
							value={nuevoProducto.cantidadDisponible}
							onChange={e =>
								handleFieldChange(
									'cantidadDisponible',
									Math.max(0, parseInt(e.target.value, 10)),
								)
							}
							min='0' // Establece el valor mínimo a 0
						/>
					</h2>

					<IconButton
						buttonText='Crear Producto' // Cambia el texto del botón a "Crear Producto"
						buttonClassname='popup-button'
						onClick={handleCreateProduct}
					/>
				</div>
			</div>
		</div>
	);
}

export default PopupAnnadirProducto;
