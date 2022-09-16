import React from 'react'
import img1 from '../../img/yeezy-1.png';
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
            <h3 className='card-name'>{product.name}</h3>
            <img className ='img1' src={product.image}/>
            <h3 className='card-price'>{product.price}</h3>
            <p className='card-desc'>{product.description}</p>
        </div>
    
    )
}

export default Item