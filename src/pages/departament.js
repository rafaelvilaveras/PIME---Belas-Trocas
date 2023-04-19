import React from 'react';

import '../css/App.css';
import '../css/departament-page.css';

import placeholder from '../images/placeholder-image.jpg';
import { Link } from 'react-router-dom';
import Itemcard from '../components/item-card';
import padronizeUrl from '../components/functions/padronizeUrl';
// import { Link, useLocation } from 'react-router-dom'; USAR DEPOIS QUE TIVER FEITO API


const Departament = () => {

    // const location = useLocation();

    // console.log(location.pathname.split('/')[1]) USAR DEPOIS QUE TIVER FEITO A API

    const depItems = [
        {
            departament: 'Livros Físicos',
            subdepartament: 'Livros Acadêmicos',
            item:[
                {
                    user: 'Fulano',
                    data:{
                        id: '9718923',
                        img: placeholder,
                        name: 'Arquitetura - Guia  Visual de Estilos',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {

                    user: 'Cicrano',
                    data:{
                        id: '5682321',
                        img: placeholder,
                        name: 'Moda, Arte e História',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {
                    
                    user: 'Beltrano',
                    data:{
                        id: '3282521',
                        img: placeholder,
                        name: 'Legal Design - Teoria e Prática',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                }
            ]
        },
        {
            departament: 'Livros Físicos',
            subdepartament: 'Teste',
            item:[
                {
                    user: 'Fulano',
                    data:{
                        id: '7237127',
                        img: placeholder,
                        name: 'teste1',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {

                    user: 'Cicrano',
                    data:{
                        id: '5121383',
                        img: placeholder,
                        name: 'teste2',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {
                    
                    user: 'Beltrano',
                    data:{
                        id: '1242151',
                        img: placeholder,
                        name: 'teste3',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                }
            ]
        },
        // {
        //     departament: 'Livros Físicos',
        //     subdepartament: 'Teste',
        //     item:[
        //         {
        //             user: 'Fulano',
        //             data:{
        //                 img: placeholder,
        //                 name: 'teste1',
        //                 type: 'Troca',
        //                 campus: 'Paraíso'
        //             },
        //         },
        //         {

        //             user: 'Cicrano',
        //             data:{
        //                 img: placeholder,
        //                 name: 'teste2',
        //                 type: 'Troca',
        //                 campus: 'Paraíso'
        //             },
        //         },
        //         {
                    
        //             user: 'Beltrano',
        //             data:{
        //                 img: placeholder,
        //                 name: 'teste3',
        //                 type: 'Troca',
        //                 campus: 'Paraíso'
        //             },
        //         }
        //     ]
        // },
    ];

    return ( 
        <>
            <div className='flex-column dep-container'>
                {depItems.map((depItems, depindex)=>{
                    return(
                        <div className='flex-column dep-content' key={'departament'+depindex}>
                            <span className='txt-shadow dep-title' key={'dep-title'+depindex}>{depItems.subdepartament.toUpperCase()}</span>
                            <div className='flex-row dep-items-wrapper' key={'dep-wrapper'+depindex}>
                                {depItems.item.map((item, index)=>{
                                    return(
                                        <Itemcard
                                            key={'item-card'+index}
                                            className={!depindex%2 ? 'flex-column dep-items-container bg-pink' : 'flex-column dep-items-container bg-blue'}
                                            index={index}
                                            item={item}
                                            url={'/i/'+item.data.id}
                                        />
                                    );
                                })}
                            </div>
                            <Link to={padronizeUrl('/d/'+depItems.departament+'/'+ depItems.subdepartament)} className={!depindex%2 ? 'dep-seeall txt-shadow purple-font' : 'dep-seeall txt-shadow blue-font'} key={'dep-seall-'+depindex}>VER TODOS</Link>
                        </div>
                    );
                })}
            </div>
        </>
     );
}
 
export default Departament;