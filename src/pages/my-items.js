import React from 'react';

import '../css/App.css';
import '../css/my-items.css';

import { my_items } from '../components/placeholder/placeholder';
import UserItem from '../components/my-items/user-item';


const MyItems = () => {

    return ( 
        <div className='flex-column mi-container'>
        <span className='mi-title'>Itens Anunciados</span>
        <div className='mi-content'>
            {my_items[0].items.map((item, key)=>{

                console.log(key, 'key em my-items');
                
                return(
                    <UserItem
                        item={item}
                        bg = {key%2===0 ? 'bg-blue' : 'bg-light-yellow'}
                        ibg = {key%2 === 0 ? '#665fce58' : '#fbe9832e'}
                    />
                    );

                })}
            </div>
        </div>
     );
}
 
export default MyItems;