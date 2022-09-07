import React from 'react'
import ItemCount from '../../ItemCount'
import './style.css'
const ItemListContainer = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad)
        console.log(`Cantidad seleccionada ${cantidad}`);
    }
    
    return (
        <div className='item-list-container'>
            <h3 className='cuotas'>{greeting}</h3>
            <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default ItemListContainer