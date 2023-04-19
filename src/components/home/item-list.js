import React from 'react';

import '../../css/App.css';
import '../../css/hitemlist.css';

import placeholder from '../../images/placeholder-image.jpg';
import { Link } from 'react-router-dom';
import padronizeUrl from '../functions/padronizeUrl';

const ItemList = ({filter, type}) => {
 
    const hItems = [
        {
            id: '824168746',
            name: 'Arquitetura - Guia Visual de Estilos',
            departament: 'departamento',
            subdepartament: 'sub departamento',
            campus: 'Vila Mariana',
            image: placeholder
        },
        {
            id: '65384721903',
            name: 'Moda, arte e história',
            departament: 'departamento',
            subdepartament: 'sub departamento',
            campus: 'Vila Mariana',
            image: placeholder
        },
        {
            id: '561461207321',
            name: 'Um livro sobre testes',
            departament: 'departamento',
            subdepartament: 'sub departamento',
            campus: 'Vila Mariana',
            image: placeholder
        },
        {
            id: '1294712947',
            name: 'Estou sem criatividade para nomes',
            departament: 'departamento',
            subdepartament: 'sub departamento',
            campus: 'Vila Mariana',
            image: placeholder
        }
    ]

    const arrayLength = hItems.length

    return ( 
        <>
            <div className='flex-column hi-container'>
                <div className='flex-column hi-e-wrapper'>
                <span className='hi-title txt-shadow'>{type+':'}</span>
                    {hItems.map((items, key)=>{
                        return(
                            <>
                                <Link className='flex-row hi-link' key={'hi'+key} to={padronizeUrl('/i/'+items.id)}>
                                    <div className='hi-image-container'>
                                        <img src={items.image}/>
                                    </div>
                                    <div className='flex-column hi-info'>
                                        <span className='hi-name'>{items.name}</span>
                                        <span>{type}</span>
                                        <span>{items.campus}</span>
                                    </div>
                                </Link>
                                <hr className={key === arrayLength-1 ? 'display-none' : 'hi-hr'}/>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
     );
}
 
export default ItemList;