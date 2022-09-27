import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
// import ItemCount from '../ItemCount';
import {products} from '../../data/products';
import ItemList from '../../components/ItemList';
import './style.css'

// const ItemListContainer = ({greeting}) => {
//     const [productos, setProductos] = useState([])
//     //IIFFE

//     useEffect(()=> {
//     (async ()=> {
//         const obtenerProductos = new Promise ((accept, reject)=> {
//             setTimeout(()=> {
//                 accept(products)
//             },);
//         })
    
//             try {
//                 const productos = await obtenerProductos;
//                 setProductos(productos);
//             } catch (error) {
//                 console.log(error);
//             }
    
//             })()
    
//         }, [])
    
//     console.log(productos)

//     const agregarAlCarrito = (cantidad) => {
//         console.log(cantidad)
//         console.log(`Cantidad seleccionada ${cantidad}`);
//     }
    
//     return (
//         <div className='item-list-container'>
//             <div className='cont'>
//                 <div className='card-1'>
//                     <ItemList products={productos}/>
//                     <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
//                 </div>
//             </div>
//         </div>
//     )
// }

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);
    useEffect(() => {
        (async () => {
            try {
                if (categoryId){
                    const response = await fetch( `https://fakestoreapi.com/products/category/`+ categoryId);
                    const products = await response.json();
                    setProductos(products);
                }
                else {
                    const response = await fetch(`https://fakestoreapi.com/products/ `);
                    const products = await response.json();
                    setProductos(products);

                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [categoryId]);

    return <ItemList products={productos} />;
};

export default ItemListContainer