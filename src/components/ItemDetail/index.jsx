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
    // <div className='card-2'>
    //         <h3 className='card-name' >{product.name}</h3>
    //         <img className='img2' src={product.image} alt="product-detail"/>

    //     <div className="cont-img">
    //         <h3 className='card-price'>${product.price}</h3>
    //             {qty ? (
    //                 <button onClick={handleFinish}>Finalizar compra</button>
    //             ) : (
    //                 <ItemCount initial={1} stock={8} onAdd={addCart}/>

    //             )}
    //     </div>
    // </div>

        <div className="detail-container">
            <h3 className='card-name' >{product.title}</h3>
            <div className="cont-img">
                <img className='img2' src={product.image}width ="300em" height="300em" alt="product-detail"/>
            </div>
            <div className="detail-subcontainer">
                <h4>{product.description}</h4>
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