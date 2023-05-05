import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTD } from '../redux-features/site-reducer';
import { GiTrade } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { RiArrowLeftRightFill } from 'react-icons/ri';

import '../css/App.css';
import '../css/dt.css';
import { my_items } from './placeholder/placeholder';

const Trade = ({siteConfig}) => {

    const dispatch = useDispatch();
    const [tItem, setItem] = useState(
        {
            code: '',
            status: '',
            data: '',
            info:{
                    img: '',
                    title: '',
                    departament: '',
                    type: ''
                }
        },
    );

    function closeTrade() {
        setItem({
            code: '',
            status: '',
            data: '',
            info:{
                    img: '',
                    title: '',
                    departament: '',
                    type: ''
                }
        },)
        dispatch(toggleTD({type: 'Troca'}))
    };

    return (
        <div className={siteConfig.trade ? 'flex-column trade-container' : 'display-none'} onClick={(e)=>{closeTrade()}}>
            <div className='flex-column trade-content' onClick={(e)=>{e.stopPropagation()}}>
                <IoMdClose className='ti-close-button'onClick={()=>{closeTrade()}}/>
                <span>Selecione um item para trocar</span>
                <div className='flex-row trade-items'>
                    <div className='flex-column ti-displayer bg-blue'>
                        <span>User</span>
                        <div className='ti-img-container'>
                            <img alt=''/>
                        </div>
                        <span>title</span>
                    </div>
                    <RiArrowLeftRightFill  className={tItem.info.title !== '' ? 'trade-button bg-purple' : 'trade-button bg-dark-gray'}/>
                    <div className='flex-column ti-displayer bg-blue'>
                        <span>{'Nome do Usuário'}</span>
                        <div className='ti-img-container'>
                            {tItem.info.img!==''&&<img src={tItem.info.img} alt={tItem.info.title}/>}
                        </div>
                        <span>{tItem.info.title}</span>
                    </div>
                </div>
                <div className='flex-column my-trade-items'>
                    <span>Itens anunciados por você</span>
                    <input type='text' placeholder='Digite o nome do item.'/>
                    {my_items[0].items.map((item, key)=>{
                        return(
                            <div key={'my-items-'+key} className='flex-row my-items'>
                                <span>{item.info.title}</span>
                                <GiTrade className={item.info.title === tItem.info.title ? 'my-items-icon bg-dark-gray' : 'my-items-icon bg-purple'} onClick={()=>{setItem(item)}}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div> 
     );
}
 
export default Trade;