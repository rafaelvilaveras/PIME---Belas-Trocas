import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LBT from '../images/LBT.png';
import { FaUser, FaSearch } from 'react-icons/fa'
import { BiCloudUpload } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import Subnav from './navbar/subnav';


import '../css/App.css';
import '../css/navbar.css';

import UserNav from './navbar/user-nav';
import NotificationBar from './navbar/notification-bar';

const Navbar = ({userInfo}) => {

    const location = useLocation();
    const codintionP = (location.pathname === '/entrar') || (location.pathname === '/cadastro')
    const logged = true;
    const [userMenu, toggleUM] = useState(false);
    const [nb, toggleNB] = useState(false);

    return ( 
        <div className='nav-geral'>
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
                <li className={!logged ? 'display-none' : 'flex-row user-wrapper'}>
                    <div>
                        <div className={'flex-row user-options-container'}>
                            <div>
                                <Link to={'/u/'+userInfo.username.toLowerCase()+'/criar publicacao'} className='flex-row user-options-content'>
                                    <BiCloudUpload className='user-icon nav-links'/>
                                </Link>
                            </div>
                            <div>
                                <span className='flex-row user-options-content'>
                                    <IoIosNotifications onClick={()=>{toggleNB(!nb)}} className='user-icon nav-links'/>
                                    <span/>
                                </span>
                            </div>
                            <hr/>
                        </div>
                        <div className='flex-column nb-relative'>
                            <NotificationBar
                                nb={nb}
                                user={userInfo.username}
                            />
                        </div>
                    </div>
                    <div  onMouseOver={() => {toggleUM(true)}} onMouseOut={()=>{toggleUM(false)}} className={'flex-column user-container'}>
                        <div className='flex-row username-container'>
                            <FaUser className='nav-links username-icon' />
                            <span  className='nav-links username'>{userInfo.username.split(' ')[0]}</span>
                        </div>
                        <div className='user-menu-container'>
                            <UserNav
                                userMenu={userMenu}
                                userInfo={userInfo}
                            />
                        </div>
                    </div>
                </li>
            </ul>
            <Subnav
            codintionP={codintionP}
            />
        </div>
     );
}
 
export default Navbar;