import React, {useState,useEffect} from 'react'
import './style.css';
import img1 from '../../img/yeezy-1.png';
const ItemCount = ({stock,initial,onAdd}) => {

    const [count,setCount]=useState(initial);

    const handleAdd =()=>{
        if(count < stock){
            setCount (count + 1);
        }else {
            alert("No hay stock disponible");
        }
    }

    const handleDecrement =()=>{
        setCount (count - 1)
        if (count < 1){
            alert("error")
        }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(()=>{
        console.log("ItemCount montado")
    },[])

    useEffect(()=>{
        console.log("Monto actualizado")
    },[count])

    return (
    <div>
        <div className='card-1'>
            <div className='cont-img'>
                <img className ='img1' src={img1}/>
            </div>
            <div className='add-carrito'>
                <button onClick={handleDecrement}>-</button>
                <h2>{count}</h2>
                <button onClick={handleAdd}>+</button>
            <button className='btn-addCarrito'onClick={addCart}>Agregar al Carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemCount;