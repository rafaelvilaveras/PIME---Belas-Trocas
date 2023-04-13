import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/App.css';
import '../../css/navbar.css';

const Snitems = ({teste, snActive, position}) => {
    return ( 
        <>
            <ul className={snActive === position ? 'flex-column sn-content' : 'display-none'}>
                <hr/>
                {teste[0].subdepartamento.map((item, key)=>{
                    return <li className='flex-column nlh' key={key}><Link to={'/'+teste[0].departamento.toLowerCase()+'/'+item.toLowerCase()} className='nav-links'>{item}</Link></li>
                })}
            </ul>
        </>
     );
}
 
export default Snitems;