import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/App.css';
import '../../css/navbar.css';

import { notifications } from '../placeholder/placeholder';
import padronizeUrl from '../functions/padronizeUrl';


const NotificationBar = ({nb, user}) => {
    return ( 
        <div className={nb ? 'flex-column prevent-select nb-container' : 'display-none'}>
            <span className='nb-title'>Notificações</span>
            <div className='flex-column nb-content'>
                {notifications[0].items.map((items, key, arrRef)=>{

                    const arrLength = arrRef.length

                    return(
                        <div className='flex-column nb-fixer' key={'nb-fixer'+key}>
                            <div onClick={()=>{alert('Quack')}} className='flex-row nb-item' key={'nb-item'+key}>
                                <div className='nb-img-container' key={'nb-img-container'+key}>
                                    <img src={items.img}/>
                                </div>
                                <div className='flex-column nb-item-info' key={'nb-item-info'+key}>
                                    <span className='item-type' key={'item-type'+key}>{'Interesse por: '+items.type}</span>
                                    <span className='item-name' key={'item-name'+key}>{items.name}</span>
                                    <span className='item-user-interested' key={'item-user-interested'+key}>{items.username}</span>
                                </div>
                            </div>
                            <hr className={key === arrLength-1 ? 'display-none' : ''} key={'nb-hr'+key}/>
                        </div>
                    );
                })}
            </div>
            <Link to={padronizeUrl('/u/'+user+'/notificacoes')} className='nav-links'>Ver Mais</Link>
        </div>
     );
}
 
export default NotificationBar;