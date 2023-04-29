import React from 'react';
import { notifications } from '../components/placeholder/placeholder';

import '../css/App.css';
import '../css/notifications.css';

const Notifications = () => {
    return ( 
        <>
            <div className='flex-column notifications-container'>
                <span className='txt-shadow notifications-title'>Notificações</span>
                <div className='flex-column notifications-content'>
                    <div className='flex-column notifications-wrapper'>
                        <span className='notifications-page-quant'>exibindo 10 por página</span>
                        {notifications[0].items.map((item, key, arrRef)=>{
                            return(
                                <div className={key%2===0 ? 'flex-row notifications-inner-content bg-blue' : 'flex-row notifications-inner-content bg-light-yellow' } key={'n-i-c'+key}>
                                    <div className='flex-row n-i-fixer'>
                                        <div className='notification-image-container' key={'n-i-p'+key}>
                                            <img src={item.img} key={'n-i'+key}/>
                                        </div>
                                        <div className='flex-column notification-item-info' key={'notification-item-info'+key}>
                                            <span className='notification-type' key={'notification-type'+key}>{'Interesse por: '+item.type}</span>
                                            <span className='txt-shadow notification-item' key={'notification-item'+key}>{item.name}</span>
                                            <span className='txt-shadow notification-user' key={'notification-user'+key}>{item.username.split(' ')[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Notifications;