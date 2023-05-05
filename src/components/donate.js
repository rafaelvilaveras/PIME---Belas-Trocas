import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTD } from '../redux-features/site-reducer';

import '../css/App.css';
import '../css/dt.css';

const Donate = ({siteConfig}) => {

    const dispatch = useDispatch();

    return ( 
        <div className={siteConfig.donate ? 'flex-column trade-container' : 'display-none'} onClick={()=>{dispatch(toggleTD({type: 'Doação'}))}}>
            <div className='flex-column trade-content donate-content' onClick={(e)=>{e.stopPropagation()}}>
                <span className='donate-title'>{'Agora é só aguardar o anunciante enviar o telefone para contato :)'}</span>
                <span className='donate-button' onClick={()=>{dispatch(toggleTD({type: 'Doação'}))}}>Ok</span>
            </div>
        </div>
     );
}
 
export default Donate;