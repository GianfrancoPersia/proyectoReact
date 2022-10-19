import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import './style.css'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const ItemDetail = ({product}) => {

    const [count, setCount] = useState(1);
    const [compra, setCompra] = useState(false);
    const { name, price, stock, img, id } = product;
    const navegar = useNavigate();
    const { addItem } = useCart();

    const onAdd = () => {
        let purchase = {
            id,
            name,
            price,
            stock,
            img,
            quantity: count,
        };
        setCompra(true);
    
        addItem(purchase);
    
        };
    
    return (
        <div className="detail-container">
            <div className="cont-img">
                <img className='img2' src={product.image} alt="product-detail"/>
            </div>
            <div className="detail-subcontainer">
                <h3 className='name' >{product.title}</h3>
                <h3 className='price' >$ {product.price}</h3>
                <h3>Description</h3>
                <h4 className='desc'>{product.description}</h4>
                    { !compra 
                    ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
                    : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
                    <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>
            </div>}
        </div>
        </div>
    )
}

export default ItemDetail