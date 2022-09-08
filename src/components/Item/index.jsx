import React from 'react'
import img1 from '../../img/yeezy-1.png';
import './style.css'

const Item = ({product}) => {
    return (
        <div className='cont-img'>
            <h3 className='card-name'>{product.name}</h3>
            <img className ='img1' src={img1}/>
            <h3 className='card-price'>{product.price}</h3>
            <p className='card-desc'>{product.description}</p>
        </div>
    
    )
}

export default Item