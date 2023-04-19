import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa'

import '../../css/App.css';
import '../../css/navbar.css';
import { Link } from 'react-router-dom';
import padronizeUrl from '../functions/padronizeUrl';


const UserNav = ({userMenu}) => {

    const user = 'VilaVeras';

    return ( 
        <>
            <div className={ userMenu ? 'flex-column pn-container' : 'display-none'}>
                <Link to={padronizeUrl('/u/'+user)} className='flex-row nav-links pn-content'>
                    <FaUser/>
                    <span>Perfil</span>
                </Link>
                <Link to={padronizeUrl('/u/'+user+'/meus itens')} className='flex-row nav-links pn-content'>
                    <BsBoxSeam/>
                    <span>Meus Itens</span>
                </Link>
                <div className='flex-row nav-links pn-content'>
                    <MdExitToApp/>
                    <span>Sair</span>
                </div>
            </div>
        </>
     );
}
 
export default UserNav;