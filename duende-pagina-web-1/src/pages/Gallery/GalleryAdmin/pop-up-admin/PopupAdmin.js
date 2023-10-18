import React, { useState } from 'react';
import './PopupAdmin.css';
import IconButton from '../../../../Components/Buttons/Button.js';
import pen from '../../../../Imagenes/pen.png';
import trash from '../../../../Imagenes/trash.png';
import Confirmacion from '../../../../Components/Confirmacion/Confirmacion';

function EditGalleryItem({ producto, onClose, onEdit }) {
	const [editingProducto, setEditingProducto] = useState(producto);
	const [confirmacionVisible, setConfirmacionVisible] = useState(false);
	const [confirmacionEliminarVisible, setConfirmacionEliminarVisible] =
		useState(false);
	const mostrarConfirmacion = () => {
		setConfirmacionVisible(true);
	};
	const mostrarConfirmacionEliminar = () => {
		setConfirmacionEliminarVisible(true);
	};

	const handleFieldChange = (fieldName, value) => {
		setEditingProducto({ ...editingProducto, [fieldName]: value });
	};

	const handleSaveChanges = () => {
		onEdit(editingProducto);
		onClose();
	};

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
	/**/

	const ocultarConfirmacionEliminar = () => {
		setConfirmacionEliminarVisible(false);
	};

	if (!producto) {
		return null; // No mostrar el pop-up si no hay producto seleccionado
	}

	const borrarProducto = () => {
		console.log('Borrar Producto');
	};

	const ocultarConfirmacion = () => {
		setConfirmacionVisible(false);
	};
	const handleGuardarCambios = () => {
		mostrarConfirmacion();
	};

	return (
		<div className='popup-container-gallery'>
			<div className='popup-content-gallery'>
				<div className='left-side-popup-gallery'>
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
					<div className='titulo-maquillaje-container'>
						<h2 className='titulo-maquillaje-editar'>
							<input
								type='text'
								value={editingProducto.titulo}
								onChange={e => handleFieldChange('titulo', e.target.value)}
							/>
						</h2>
						<div className='editar-lapiz'>
							<img src={pen} alt={'editar-lapiz'}></img>
						</div>
					</div>
				</div>

				<div className='right-side-popup-editar'>
					<div className='cerrar-boton-x'>
						<IconButton
							buttonText='X'
							buttonClassname='login-button'
							handleOnClick={onClose}
						/>
					</div>
					<div className='container-edicion'>
						<div className='Descripcion-editar'>
							<p className='Titulos-edit'>Descripción</p>
							<textarea
								value={editingProducto.descripcion}
								onChange={e => handleFieldChange('descripcion', e.target.value)}
							/>
						</div>
						<div className='texto-categoria-editar'>
							<p className='Titulos-edit'>Categoría</p>
							<input
								type='text'
								value={editingProducto.categoria}
								onChange={e => handleFieldChange('categoria', e.target.value)}
							/>
						</div>
						<div className='texto-categoria-editar'>
							<p className='Titulos-edit'>Subcategoría</p>
							<input
								type='text'
								value={editingProducto.subcategoria}
								onChange={e =>
									handleFieldChange('subcategoria', e.target.value)
								}
							></input>
						</div>
						<div className='Descripcion-editar'>
							<p className='Titulos-edit'>Tags</p>
							<textarea
								type='text'
								value={editingProducto.etiquetas}
								onChange={e => handleFieldChange('etiquetas', e.target.value)}
							></textarea>
						</div>
						<div className='pop-fecha'>{editingProducto.fecha}</div>
					</div>
					<button className='popup-button-edit' onClick={handleGuardarCambios}>
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
					mensaje='¿Estás seguro de que deseas eliminar este maquillaje?'
					onAceptar={borrarProducto} // Función a ejecutar al aceptar
					onCancelar={ocultarConfirmacionEliminar} // Función a ejecutar al cancelar
				/>
			)}
		</div>
	);
}

export default EditGalleryItem;
