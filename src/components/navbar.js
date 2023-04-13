import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LBT from '../images/LBT.png';
import { FaUser, FaSearch } from 'react-icons/fa'
import Subnav from './navbar/subnav';


import '../css/App.css';
import '../css/navbar.css';

const Navbar = () => {

    const location = useLocation();
    const codintionP = (location.pathname === '/entrar') || (location.pathname === '/cadastro') 

    return ( 
        <>
            <ul className='flex-row nav-container' >
                <li className='nav-logo'>
                    <Link to={"/"}>
                        <img src={LBT} alt='Belas Trocas' ></img>
                    </Link>
                </li>
                <li className={ codintionP ? 'display-none' : 'nav-search nav-content'}>
                    <form className='flex-row nav-form'>
                        <input
                            type='text'
                            maxLength={70}
                        />
                        <FaSearch className='search-icon' />
                    </form>
                </li>
                <li className='nav-content'>
                    <FaUser className='user-icon' />
                    <p>FAÇA O <Link className='nav-links' to={"/entrar"}>LOGIN</Link> OU <br/> <Link className='nav-links' to={"/cadastro"}>CADASTRE-SE</Link></p>
                </li>
            </ul>
            <Subnav
            codintionP={codintionP}
            />
        </>
     );
}
 
export default Navbar;