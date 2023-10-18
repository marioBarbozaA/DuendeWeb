import React, { useState } from 'react';
import './PopupAnnadir.css'; // Asegúrate de tener el archivo CSS correcto
import IconButton from '../../../../Components/Buttons/Button.js';
import pen from '../../../../Imagenes/pen.png';
import Confirmacion from '../../../../Components/Confirmacion/Confirmacion';

function AgregarProducto({ onClose, onAgregar }) {
	const [nuevoProducto, setNuevoProducto] = useState({
		titulo: '',
		descripcion: '',
		categoria: '',
		subcategoria: '',
		etiquetas: '',
		imagen: null,
		fecha: new Date().toDateString(), // Establece la fecha actual o la deseada
	});

	const [confirmacionVisible, setConfirmacionVisible] = useState(false);

	const mostrarConfirmacion = () => {
		setConfirmacionVisible(true);
	};

	const handleFieldChange = (fieldName, value) => {
		setNuevoProducto({ ...nuevoProducto, [fieldName]: value });
	};

	const handleGuardarCambios = () => {
		mostrarConfirmacion();
	};

	const handleImageChange = e => {
		const imageFile = e.target.files[0];
		if (imageFile) {
			const imageUrl = URL.createObjectURL(imageFile);
			setNuevoProducto({ ...nuevoProducto, imagen: imageUrl });
		}
	};

	const ocultarConfirmacion = () => {
		setConfirmacionVisible(false);
	};

	const agregarProducto = () => {
		onAgregar(nuevoProducto);
		onClose();
	};

	return (
		<div className='popup-container-gallery'>
			<div className='popup-content-gallery'>
				<div className='left-side-popup-gallery'>
					{nuevoProducto.imagen ? (
						<img src={nuevoProducto.imagen} alt={nuevoProducto.titulo} />
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

					<div className='titulo-maquillaje-container'>
						<h2 className='titulo-maquillaje-editar'>
							<input
								type='text'
								value={nuevoProducto.titulo}
								onChange={e => handleFieldChange('titulo', e.target.value)}
								placeholder='Título'
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
								value={nuevoProducto.descripcion}
								onChange={e => handleFieldChange('descripcion', e.target.value)}
							></textarea>
						</div>
						<div className='texto-categoria-editar'>
							<p className='Titulos-edit'>Categoría</p>
							<input
								type='text'
								value={nuevoProducto.categoria}
								onChange={e => handleFieldChange('categoria', e.target.value)}
							/>
						</div>
						<div className='texto-categoria-editar'>
							<p className='Titulos-edit'>Subcategoría</p>
							<input
								type='text'
								value={nuevoProducto.subcategoria}
								onChange={e =>
									handleFieldChange('subcategoria', e.target.value)
								}
							></input>
						</div>
						<div className='Descripcion-editar'>
							<p className='Titulos-edit'>Tags</p>
							<textarea
								type='text'
								value={nuevoProducto.etiquetas}
								onChange={e => handleFieldChange('etiquetas', e.target.value)}
							></textarea>
						</div>
						<div className='pop-fecha'>{nuevoProducto.fecha}</div>
					</div>
					<button className='popup-button-edit' onClick={handleGuardarCambios}>
						Agregar Producto
					</button>
				</div>
			</div>
			{confirmacionVisible && (
				<Confirmacion
					mensaje='¿Estás seguro de que deseas agregar el producto?'
					onAceptar={agregarProducto}
					onCancelar={ocultarConfirmacion}
				/>
			)}
		</div>
	);
}

export default AgregarProducto;
