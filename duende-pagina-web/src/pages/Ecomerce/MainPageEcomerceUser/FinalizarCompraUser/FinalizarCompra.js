import React, { useState,useEffect} from "react";
import NavBar from '../../../../Components/NavBar/NavBar.js'; 
import Footer from '../../../../Components/Footer/Footer.js'; 
import Logo from '../../../../Imagenes/Logo-Duende.png';

import "./FinalizarCompra.css"
import data from"./provincias.json"

function FinalizarCompra() {
  const [numero, setNumero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [detalles, setDetalles] = useState("");
  const [comprobante, setComprobante] = useState(null); // Para almacenar la imagen del comprobante
  const [total, setTotal] = useState(0); // Puedes calcular el total aquí

  //Todo de provincias
  const [provincias] = useState(data.provincias);
  const [selectedProvincia, setSelectedProvincia] = useState(null);
  const [selectedCanton, setSelectedCanton] = useState(null);
  const [selectedDistrito, setSelectedDistrito] = useState(null);

  const handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;
    setSelectedProvincia(selectedProvincia);
    setSelectedCanton(null);
    setSelectedDistrito(null);
  };

  const handleCantonChange = (event) => {
    const selectedCanton = event.target.value;
    setSelectedCanton(selectedCanton);
    setSelectedDistrito(null);
  };

  const handleDistritoChange = (event) => {
    const selectedDistrito = event.target.value;
    setSelectedDistrito(selectedDistrito);
  };

  const provinciasOptions = Object.keys(provincias).map((provinciaKey) => (
    <option key={provinciaKey} value={provinciaKey}>
      {provincias[provinciaKey].nombre}
    </option>
  ));

  const cantonesOptions = selectedProvincia
    ? Object.keys(provincias[selectedProvincia].cantones).map((cantonKey) => (
        <option key={cantonKey} value={cantonKey}>
          {provincias[selectedProvincia].cantones[cantonKey].nombre}
        </option>
      ))
    : [];

  const distritosOptions = selectedCanton
    ? Object.entries(provincias[selectedProvincia].cantones[selectedCanton].distritos).map(
        ([distritoKey, distritoNombre]) => (
          <option key={distritoKey} value={distritoKey}>
            {distritoNombre}
          </option>
        )
      )
    : [];

// lo de arriba es para manejo de provincias 

  // Función para manejar la subida de la imagen del comprobante
  const handleComprobanteChange = (e) => {
    const file = e.target.files[0];
    setComprobante(file);
  };

  //Funcion para Obtener el total 

    // Función para calcular el total del carrito
    const calcularTotal = (carrito) => {
        let total = 0;
        // Recorre el carrito y suma los precios de los productos
        carrito.forEach((producto) => {
        total += producto.precio;
        });
        return total;
    };

    // Simulación de obtener el carrito desde una base de datos o JSON
    useEffect(() => {
        // Supongamos que tienes una función para obtener el carrito
        //const carrito = obtenerCarritoDesdeBaseDeDatos(); // Debes implementar esta función
        const carrito = [
            { id: 1, nombre: "Producto 1", precio: 10.99 },
            { id: 2, nombre: "Producto 2", precio: 5.49 },
            { id: 3, nombre: "Producto 3", precio: 7.99 },
            { id: 4, nombre: "Producto 4", precio: 12.99 },
          ];; 
        const nuevoTotal = calcularTotal(carrito);
        setTotal(nuevoTotal);
    }, []); // Se ejecuta una vez al cargar el componente


  // Función para finalizar el pago
  const finalizarPago = () => {
    if (
      numero &&
      telefono &&
      email &&
      selectedProvincia &&
      selectedCanton &&
      selectedDistrito &&
      detalles &&
      comprobante
    ) {
      // Lógica para finalizar el pago
      alert("Pago finalizado con éxito");
    } else {
      alert("Por favor completa todos los campos antes de finalizar el pago");
    }
  };

  return (
    <>
    <NavBar imagen={Logo}/>
    <div className="container-finalizar-compra">
      <h1>Finaliza tu compra</h1>
      <div className="contenedor-arriba">
        <div className="lado-inputs">
            <input
                type="text"
                placeholder="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />
                <br />
            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
                <br />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
                <br />
        </div>
        
        <div className="lado-provincias">

        <select
        className="custom-select"
        onChange={handleProvinciaChange}
        value={selectedProvincia || ''}
        placeholder="Selecciona una provincia"
      >
        <option value="" disabled>
          Selecciona una provincia
        </option>
        {provinciasOptions}
      </select>

      {selectedProvincia && (
        <select
          className="custom-select"
          onChange={handleCantonChange}
          value={selectedCanton || ''}
          placeholder="Selecciona un cantón"
        >
          <option value="" disabled>
            Selecciona un cantón
          </option>
          {cantonesOptions}
        </select>
      )}

      {selectedCanton && (
        <select
          className="custom-select"
          onChange={handleDistritoChange}
          value={selectedDistrito || ''}
          placeholder="Selecciona un distrito"
        >
          <option value="" disabled>
            Selecciona un distrito
          </option>
          {distritosOptions}
        </select>
      )}
           
        </div>
      </div>
     <div className="lado-abajo">
        <textarea
            value={detalles}
            placeholder="Detalles de direccion"
            onChange={(e) => setDetalles(e.target.value)}
        ></textarea>

        <label htmlFor="file-upload" className="custom-file-input">
        Añadir Comprobante
        </label>
        <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="input-file"
            onChange={handleComprobanteChange}
        />
        <span className="file-name">
            {comprobante ? `Archivo seleccionado: ${comprobante.name}` : "Ningún archivo seleccionado"}
        </span>

        <p>Total: ${total.toFixed(2)}</p>
        <div>
            <button onClick={finalizarPago}>Finalizar el pago</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default FinalizarCompra;
