import React, { useState } from 'react';
import '../preview-producto/preview-producto.css';
import CandadoAbierto from '../../Imagenes/CandadoAbierto.png';
import CandadoCerrado from '../../Imagenes/CandadoCerrado.png';

function PreviewGalleryAdmin({ imagen, titulo, onClick }) {
	const [candadoCerrado, setCandadoCerrado] = useState(false);

	const toggleCandado = () => {
		setCandadoCerrado(!candadoCerrado);
		//funcion cambiar estado imagen
	};

	return (
		<div className={`preview-producto ${candadoCerrado ? 'disabled' : ''}`}>
			<div
				className={`imgProducto ${candadoCerrado ? 'red-blur' : ''}`}
				onClick={onClick}
			>
				<img src={imagen} alt='Producto' />
			</div>
			<div className='candado-titulo-container'>
				<h3>{titulo}</h3>
				<div className='imgCandado' onClick={toggleCandado}>
					<img
						src={candadoCerrado ? CandadoCerrado : CandadoAbierto}
						alt='Candado'
					/>
				</div>
			</div>
		</div>
	);
}

export default PreviewGalleryAdmin;
