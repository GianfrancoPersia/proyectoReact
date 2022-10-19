import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import logoSP from '../../img/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav className='cont_nav'>
            <ul className='cont_ul'>
                <div className='cont_logo'>
                    <img className ='logo_sp' src={logoSP} alt='logotipo'/>
                </div>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/category/men's clothing">Hombre</Link>
                </li>
                <li>
                    <Link to="/category/women's clothing">Mujer</Link>
                </li>
                <CartWidget/>
            </ul>
            <h3 className='cuotas'>¡¡¡ HASTA 6 CUOTAS SIN INTERES !!!</h3>
        </nav>
    </>
    )
}

export default NavBar;