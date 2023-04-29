import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import '../../css/App.css';
import '../../css/my-items.css';


const UserItem = ({item, bg, ibg}) => {

    const [details, toggleDetails] = useState(false);

    console.log(item)

    return ( 
        <>
            <div className={'flex-row mi-inner-container '+bg}  onClick={()=>{toggleDetails(!details)}}>
                <div className='flex-row mi-a-info'>
                    <div className='flex-column'>
                        <span className='mi-title'>Código do Anúncio</span>
                        <span>{item.code}</span>
                    </div>
                    <div className='flex-column'>
                        <span className='mi-title'>Status</span>
                        <span className='txt-shadow mi-title nav-links'>{item.status}</span>
                    </div>
                    <div className='flex-column'>
                        <span className='mi-title'>Data</span>
                        <span>{item.data}</span>
                    </div>
                    <div className='flex-row prevent-select'>
                        <span>Detalhes do Anúncio</span>
                        <div className='mi-details-fixer'>
                            {!details&&<IoIosArrowDown className='mi-icon'/>}
                            {details&&<IoIosArrowUp className='mi-icon'/>}
                        </div>
                    </div>
                </div>
            </div>
            {details&&
                <div style={{backgroundColor: ibg}} className='flex-row mi-info'>
                    <div className='flex-row mi-info-content'>
                        <div className='mi-img-container'>
                            <img src={item.info.img}/>
                        </div>
                        <div className='flex-column'>
                            <span className='mi-title'>{item.info.title}</span>
                            <span>{item.info.departament}</span>
                            <span>{item.info.type}</span>
                        </div>
                    </div>
                </div>
            }
        </>
     );
}
 
export default UserItem;