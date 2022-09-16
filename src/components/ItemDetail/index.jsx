import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'


const ItemDetail = ({product}) => {
    return (
    <div className='card-2'>
        <div className="cont-img">
            <h3 className='card-name' >{product.name}</h3>
            <img className='img2' src={product.image} alt="product-detail"/>
            <h3 className='card-price'>${product.price}</h3>
        </div>
        <ItemCount initial={1} stock={8}/>
    </div>
    )
}

export default ItemDetail