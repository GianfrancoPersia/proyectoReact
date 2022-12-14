import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom';

//card del producto
const Item = ({product}) => {

    const navigate = useNavigate();

	const handleNavigate = () => {
	navigate(`/detail/${product.id}`)
	}

    return (
        <div className='cont-card' onClick={handleNavigate}>
            <img className ='img' src={product.image} alt="product"/>
            <h3 className='card-name'>{product.title}</h3>
            <h3 className='card-price'>$ {product.price}</h3>
        </div>
    )
}

export default Item