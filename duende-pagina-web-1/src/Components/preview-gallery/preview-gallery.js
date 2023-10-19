import React from 'react';
import '../preview-producto/preview-producto.css';

function PreviewGallery({ imagen, titulo, onClick }) {
	return (
		<div className='preview-producto' onClick={onClick}>
			<div className='imgProducto'>
				<img src={imagen} alt='Producto' />
			</div>
			<h3>{titulo}</h3>
		</div>
	);
}

export default PreviewGallery;
