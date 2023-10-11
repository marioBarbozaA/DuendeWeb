/*
import React, { useState } from "react";
import "./PopUpHistorialUser.css";

function PopUpHistorialUser({ compra, onClose }) {
  const [cantidad, setCantidad] = useState(0); // Estado para la cantidad seleccionada

  if (!compra) {
    return null; // No mostrar el pop-up si no hay compra seleccionada
  }

  const handleDescargarComprobante = () => {
    // Lógica para descargar el comprobante de la compra
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <div className="left-side-popup">
          <h2>ID de Compra: {compra.id}</h2>
          <p>Nombre del Usuario: {compra.nombreUsuario}</p>
          <p>Correo del Usuario: {compra.correoUsuario}</p>
          <p>Teléfono del Usuario: {compra.telefonoUsuario}</p>
          <p>Dirección de Envío: {compra.direccion}</p>
          <p>Fecha de Compra: {compra.fechaCompra}</p>
          <button onClick={handleDescargarComprobante}>Descargar Comprobante</button>
        </div>
        <div className="right-side-popup">
          <h2>Cliente ID: {compra.clienteId}</h2>
          <table className="productos-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {compra.productosComprados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombreProducto}</td>
                  <td>${producto.precio.toFixed(2)}</td>
                  <td>{producto.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Costo de Envío: ${compra.costoEnvio.toFixed(2)}</p>
          <p>IVA: {compra.iva}%</p>
          <p>Total General: ${compra.totalGeneral.toFixed(2)}</p>
          <p>Fecha de Entrega: {compra.fechaEntrega}</p>
          <p>Nota: {compra.nota || "-"}</p>
          <p>Estado: {compra.estado}</p>
        </div>
      </div>
    </div>
  );
}

export default PopUpHistorialUser;
*/
