import React, {useState,useEffect} from 'react'
import './style.css';
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
        <div className='add-carrito'>
            <button onClick={handleDecrement}>-</button>
                <h2>{count}</h2>
                <button onClick={handleAdd}>+</button>
            <button className='btn-addCarrito'onClick={addCart}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;