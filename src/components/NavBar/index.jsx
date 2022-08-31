import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import logoSP from '../../img/spsneakers.png';

const NavBar = () => {
    return (
        <>
    <header>
        <nav className='cont_nav'>
            <ul className='cont_ul'>
            <div className='cont_logo'>
                <img className ='logo_sp' src={logoSP}/>
            </div>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Hombre</a></li>
                <li><a href="/">Mujer</a></li>
                <li><a href="/">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default NavBar;