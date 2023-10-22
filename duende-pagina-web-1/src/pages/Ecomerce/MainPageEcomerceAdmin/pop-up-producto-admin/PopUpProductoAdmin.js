import React, { useState } from 'react';
import './PopUpProductoAdmin.css';
import trash from '../../../../Imagenes/trash.png';
import Confirmacion from '../../../../Components/Confirmacion/Confirmacion';
import IconButton from '../../../../Components/Buttons/Button.js';

//backend
import axios from 'axios';

function PopUpProducto({ product, onClose, onProductoChange }) {
	const [editingProducto, setEditingProducto] = useState(product);
	const [confirmacionVisible, setConfirmacionVisible] = useState(false);
	const [confirmacionEliminarVisible, setConfirmacionEliminarVisible] =
		useState(false);
	const handleFieldChange = (fieldName, value) => {
		setEditingProducto({ ...editingProducto, [fieldName]: value });
	};
	const mostrarConfirmacionEliminar = () => {
		setConfirmacionEliminarVisible(true);
	};

	const ocultarConfirmacionEliminar = () => {
		setConfirmacionEliminarVisible(false);
	};
	const handleSaveChanges = () => {
		onProductoChange(editingProducto);
		onClose();
	};

	const validarCampos = () => {
		return (
			editingProducto.name.trim() !== '' &&
			editingProducto.category.trim() !== '' &&
			editingProducto.description.trim() !== '' &&
			editingProducto.price !== '' &&
			editingProducto.stock !== '' &&
			editingProducto.mainImageUrl !== null
		);
	};

	if (!product) {
		return null; // No mostrar el pop-up si no hay producto seleccionado
	}

	const quitarImagen = () => {
		setEditingProducto({ ...editingProducto, imagen: null });
	};

	const handleImageChange = e => {
		const imageFile = e.target.files[0];
		if (imageFile) {
			const imageUrl = URL.createObjectURL(imageFile);
			setEditingProducto({ ...editingProducto, imagen: imageUrl });
		}
	};

	const borrarProducto = () => {
		console.log('Borrar Producto');
	};
	const mostrarConfirmacion = () => {
		setConfirmacionVisible(true);
	};

	const ocultarConfirmacion = () => {
		setConfirmacionVisible(false);
	};
	const handleGuardarCambios = () => {
		if (validarCampos()) {
			mostrarConfirmacion();
		} else {
			alert(
				'Por favor completa todos los campos obligatorios antes de guardar los cambios.',
			);
		}
	};

	return (
		<div className='popup-container'>
			<div className='popup-content'>
				<div className='left-side-popup'>
					{editingProducto.mainImageUrl ? (
						<img src={editingProducto.mainImageUrl} alt={editingProducto.name} />
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
						{/*}
						<img src={Producto} alt={producto.subtitulo} />
	<img src={Producto} alt={producto.subtitulo} />*/}
						<div className='image-control'>
							{/*<IconButton
								buttonText='+'
								buttonClassname='popup-button'
								onClick={agregarImagen}
/>*/}
							<button className='popup-button' onClick={quitarImagen}>
								-
							</button>
							<button
								className='popup-button' // Agrega las clases de estilo que desees
								style={{
									background: `url(${trash}) no-repeat`,
									backgroundSize: '50% 50%',
									backgroundPosition: 'center center',
								}}
								onClick={mostrarConfirmacionEliminar}
							></button>
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
							value={editingProducto.name}
							placeholder='Titulo'
							onChange={e => handleFieldChange('name', e.target.value)}
						/>
					</h2>

					<p className='texto-pequenno-pop-up'>
						<input
							type='text'
							placeholder='Categoria'
							value={editingProducto.category}
							onChange={e => handleFieldChange('category', e.target.value)}
						/>
					</p>
					<p className='Descripcion-pop-up'>
						<textarea
							placeholder='Descripcion'
							value={editingProducto.description}
							onChange={e => handleFieldChange('description', e.target.value)}
						/>
					</p>

					<p className='texto-pequenno-pop-up'>
						<select
							placeholder='Estado'
							value={editingProducto.status}
							onChange={e => handleFieldChange('status', e.target.value)}
						>
							<option value='disponible'>Disponible</option>
							<option value='agotado'>Agotado</option>
						</select>
					</p>
					<h2 className='cantidad-control'>
						<input
							placeholder='Precio'
							type='number'
							value={editingProducto.price}
							onChange={e =>
								handleFieldChange(
									'price',
									Math.max(0, parseFloat(e.target.value)),
								)
							}
							min='0' // Establece el valor mínimo a 0
						/>
						<input
							type='number'
							placeholder='Cantidad'
							value={editingProducto.stock}
							onChange={e =>
								handleFieldChange(
									'stock',
									Math.max(0, parseInt(e.target.value, 10)),
								)
							}
							min='0' // Establece el valor mínimo a 0
						/>
					</h2>

					<button className='popup-button' onClick={handleGuardarCambios}>
						Guardar Cambios
					</button>
				</div>
			</div>
			{confirmacionVisible && (
				<Confirmacion
					mensaje='¿Estás seguro de que deseas guardar los cambios?'
					onAceptar={handleSaveChanges} // Función a ejecutar al aceptar
					onCancelar={ocultarConfirmacion} // Función a ejecutar al cancelar
				/>
			)}
			{confirmacionEliminarVisible && (
				<Confirmacion
					mensaje='¿Estás seguro de que deseas eliminar este producto?'
					onAceptar={borrarProducto} // Función a ejecutar al aceptar
					onCancelar={ocultarConfirmacionEliminar} // Función a ejecutar al cancelar
				/>
			)}
		</div>
	);
}

export default PopUpProducto;
