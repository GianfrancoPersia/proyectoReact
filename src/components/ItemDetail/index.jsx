import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import './style.css'
import { useNavigate } from "react-router-dom";


const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const addCart = (quantity) => {
        setQty(quantity);
    };

    const handleFinish = () => {
        navigate("/cart");
    };

    console.log(qty);


    return (
    <div className='card-2'>
            <h3 className='card-name' >{product.name}</h3>
            <img className='img2' src={product.img} alt="product-detail"/>

        <div className="cont-img">
            <h3 className='card-price'>${product.price}</h3>
                {qty ? (
                    <button onClick={handleFinish}>Finalizar compra</button>
                ) : (
                    <ItemCount initial={1} stock={8} onAdd={addCart}/>
                )}
        </div>
    </div>
    )
}

export default ItemDetail