import React from 'react'
import IconButton from '../../../Components/Buttons/Button.js';

function MainPageEcomerceUser(props) {
    return (
      <div className='MainPageEcomerce-container'>
        <h1>Productos</h1>
        <div className='filtros-boton-container'>
            <div className='filtros-container'>
            <IconButton
                text='Historial'
                onClick={this.props.onClick}
                className='boton-agregar'
            />
            </div>
            




        </div>







      </div>
    )
  }

export default MainPageEcomerceUser;
