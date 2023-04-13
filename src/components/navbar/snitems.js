import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/App.css';
import '../../css/navbar.css';

const Snitems = ({navItems, snActive, position}) => {

    console.log(navItems.subdepartamento)

    return ( 
        <>
            <ul className={snActive === position ? 'flex-column sn-content' : 'display-none'}>
                <hr/>
                {navItems.subdepartamento.map((item, key)=>{
                    return <li className='flex-column nlh' key={key}><Link to={'/' + navItems.departamento.toLowerCase() + '/' + item.toLowerCase()} className='nav-links'>{item}</Link></li>
                })}
            </ul>
        </>
     );
}
 
export default Snitems;