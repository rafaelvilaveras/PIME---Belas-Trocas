import React, { useState } from 'react';
import HomeSlider from '../components/home/home-slider';
import ItemList from '../components/home/item-list';
import { RiCheckboxCircleLine, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import '../css/App.css';
import '../css/home.css';

const Home = () => {

    const [filter, setFilter] = useState('Todos')
    const teste = true;

    const depart = ['Todos', 'Eletrônicos', 'Livros', 'Materiais']


    return ( 
        <>
            <div style={{backgroundColor: teste ? 'white' : 'red'}} className='flex-column home-container'>

                <HomeSlider/>

                <div className='flex-column h-item-container'>
                    <div className='flex-row f-container prevent-select'>
                        <span className='f-title'>ADICIONADOS RECENTES</span>
                        <div className='flex-column s-gap'>
                            <span className='txt-shadow'>Filtrar por:</span>
                            <div className='flex-row f-checkbox-container'>
                                {depart.map((item, key)=>{
                                   return(
                                        <div className='flex-row f-checkbox' key={'checkbox'+key} onClick={()=>{setFilter(item)}}>
                                            <RiCheckboxBlankCircleLine className={filter !== item ? '' : 'display-none'}/>
                                            <RiCheckboxCircleLine className={filter === item ? '' : 'display-none'}/>
                                            <span>{item}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex-row hi-e-container'>
                        <ItemList
                            filter = {filter}
                            type = {'Trocas'}
                        />
                        <ItemList
                            filter = {filter}
                            type = {'Doações'}
                        />
                    </div>
                <Link className='txt-shadow i-link' to={'/d/recentes'}>VER TODOS</Link>
                </div>


            </div>
        </>
     );
}
 
export default Home;