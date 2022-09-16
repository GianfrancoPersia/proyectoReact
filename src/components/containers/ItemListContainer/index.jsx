import React, { useEffect, useState } from 'react';
import ItemCount from '../../ItemCount'
import {products} from '../../../data/products';
import ItemList from '../../ItemList';
import './style.css'
const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    //IIFFE

    useEffect(()=> {
    (async ()=> {
        const obtenerProductos = new Promise ((accept, reject)=> {
            setTimeout(()=> {
                accept(products)
            },);
        })
    
            try {
                const productos = await obtenerProductos;
                setProductos(productos);
            } catch (error) {
                console.log(error);
            }
    
            })()
    
        }, [])
    
    console.log(productos)

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad)
        console.log(`Cantidad seleccionada ${cantidad}`);
    }
    
    return (
        <div className='item-list-container'>
            <div className='cont'>
                <div className='card-1'>
                    <ItemList products={productos}/>
                    <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer