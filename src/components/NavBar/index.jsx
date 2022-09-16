import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import logoSP from '../../img/spsneakers.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav className='cont_nav'>
            <ul className='cont_ul'>
                <div className='cont_logo'>
                    <img className ='logo_sp' src={logoSP}/>
                </div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/hombre">Hombre</Link>
                </li>
                <li>
                    <Link to="/category/mujer">Mujer</Link>
                </li>
                <li>
                    <Link to="/category/contacto">Contacto</Link>
                </li>
                <CartWidget/>
            </ul>
            <h3 className='cuotas'>HASTA 12 CUOTAS SIN INTERES</h3>
        </nav>
    </>
    )
}

export default NavBar;