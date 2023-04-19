import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LBT from '../images/LBT.png';
import { FaUser, FaSearch } from 'react-icons/fa'
import Subnav from './navbar/subnav';


import '../css/App.css';
import '../css/navbar.css';
import UserNav from './navbar/user-nav';

const Navbar = () => {

    const location = useLocation();
    const codintionP = (location.pathname === '/entrar') || (location.pathname === '/cadastro')
    const logged = true;
    const [userMenu, toggleUM] = useState(false);

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
                <li className={logged ? 'display-none' : 'nav-content'}>
                    <FaUser className='user-icon' />
                    <p>FAÇA O <Link className='nav-links' to={"/u/entrar"}>LOGIN</Link> OU <br/> <Link className='nav-links' to={"/u/cadastro"}>CADASTRE-SE</Link></p>
                </li>
                <li  onMouseOver={() => {toggleUM(true)}} onMouseOut={()=>{toggleUM(false)}} className={!logged ? 'display-none' : 'nav-content'}>
                    <FaUser className='user-icon nav-links' />
                    <span  className='nav-links username'>VilaVeras</span>
                    <UserNav
                        userMenu={userMenu}
                    />
                </li>
            </ul>
            <Subnav
            codintionP={codintionP}
            />
        </>
     );
}
 
export default Navbar;