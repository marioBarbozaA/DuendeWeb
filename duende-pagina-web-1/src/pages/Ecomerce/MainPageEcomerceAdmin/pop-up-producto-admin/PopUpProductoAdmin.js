import React, { useState } from 'react';
import './PopUpProductoAdmin.css';
import trash from '../../../../Imagenes/trash.png';
import Confirmacion from '../../../../Components/Confirmacion/Confirmacion';
import IconButton from '../../../../Components/Buttons/Button.js';

function PopUpProducto({ producto, onClose, onProductoChange }) {
	const [editingProducto, setEditingProducto] = useState(producto);
	const [confirmacionVisible, setConfirmacionVisible] = useState(false);

	const handleFieldChange = (fieldName, value) => {
		setEditingProducto({ ...editingProducto, [fieldName]: value });
	};

	const handleSaveChanges = () => {
		onProductoChange(editingProducto);
		onClose();
	};

	if (!producto) {
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

	const borrarImagenes = () => {
		// Lógica para manejar el inicio de sesión
	};
	const mostrarConfirmacion = () => {
		setConfirmacionVisible(true);
	};

	const ocultarConfirmacion = () => {
		setConfirmacionVisible(false);
	};
	const handleGuardarCambios = () => {
		mostrarConfirmacion();
	};

	return (
		<div className='popup-container'>
			<div className='popup-content'>
				<div className='left-side-popup'>
					{editingProducto.imagen ? (
						<img src={editingProducto.imagen} alt={editingProducto.subtitulo} />
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
								onClick={borrarImagenes}
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
							value={editingProducto.subtitulo}
							placeholder='Titulo'
							onChange={e => handleFieldChange('subtitulo', e.target.value)}
						/>
					</h2>

					<p className='texto-pequenno-pop-up'>
						<input
							type='text'
							placeholder='Categoria'
							value={editingProducto.categoria}
							onChange={e => handleFieldChange('categoria', e.target.value)}
						/>
					</p>
					<p className='Descripcion-pop-up'>
						<textarea
							placeholder='Descripcion'
							value={editingProducto.descripcion}
							onChange={e => handleFieldChange('descripcion', e.target.value)}
						/>
					</p>

					<p className='texto-pequenno-pop-up'>
						<select
							placeholder='Estado'
							value={editingProducto.estado}
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
							value={editingProducto.precio}
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
							value={editingProducto.cantidadDisponible}
							onChange={e =>
								handleFieldChange(
									'cantidadDisponible',
									Math.max(0, parseInt(e.target.value, 10)),
								)
							}
							min='0' // Establece el valor mínimo a 0
						/>
					</h2>

					<button
						className='popup-button' // Agrega las clases de estilo que desees
						onClick={handleGuardarCambios}
					>
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
		</div>
	);
}

export default PopUpProducto;
