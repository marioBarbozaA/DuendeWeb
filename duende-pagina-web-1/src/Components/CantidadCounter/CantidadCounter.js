import React, { useState } from 'react';
import './CantidadCounter.css';
function CantidadCounter({ stock, onCantidadChange }) {
	const [cantidad, setCantidad] = useState(0);

	const handleRestar = () => {
		if (cantidad > 0) {
			setCantidad(cantidad - 1);
			onCantidadChange(cantidad - 1);
		}
	};

	const handleSumar = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1);
			onCantidadChange(cantidad + 1);
		}
	};

	return (
		<div className='cantidad-counter'>
			<button onClick={handleRestar}>-</button>
			<span>{cantidad}</span>
			<button onClick={handleSumar}>+</button>
		</div>
	);
}

export default CantidadCounter;
