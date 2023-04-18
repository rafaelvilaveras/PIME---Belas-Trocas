import React from 'react';

import '../css/App.css';
import '../css/departament-page.css';

import placeholder from '../images/placeholder-image.jpg';
import { Link } from 'react-router-dom';
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
                        img: placeholder,
                        name: 'Arquitetura - Guia  Visual de Estilos',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {

                    user: 'Cicrano',
                    data:{
                        img: placeholder,
                        name: 'Moda, Arte e História',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {
                    
                    user: 'Beltrano',
                    data:{
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
                        img: placeholder,
                        name: 'teste1',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {

                    user: 'Cicrano',
                    data:{
                        img: placeholder,
                        name: 'teste2',
                        type: 'Troca',
                        campus: 'Paraíso'
                    },
                },
                {
                    
                    user: 'Beltrano',
                    data:{
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
                                        <div className={!depindex%2 ? 'flex-column dep-items-container bg-pink' : 'flex-column dep-items-container bg-blue'} key={'dep-items-'+index}>
                                            <div className='flex-column dep-items-content' key={'dep-items-content'+index}>
                                                <span className='dep-user txt-shadow' key={'dep-user'+index}>{item.user}</span>
                                                <div className='dep-img-container' key={'dep-img-container'+index}>
                                                    <img src={item.data.img} key={'dep-img'+index}/>
                                                </div>
                                                <span className='dep-itemname' key={'dep-itemName'+index}>{item.data.name}</span>
                                                <div className='flex-column'>
                                                    <span key={'dep-itemType'+index}>{item.data.type}</span>
                                                    <span key={'dep-itemLoc'+index}>{item.data.campus}</span>
                                                </div>
                                            </div>
                                            <button className='cb dep-button' key={'dep-button'+index}>Eu Quero!</button>
                                        </div>
                                    );
                                })}
                            </div>
                            <Link to={'/d/' + depItems.departament.toLowerCase() + '/' + depItems.subdepartament.toLowerCase() } className={!depindex%2 ? 'dep-seeall txt-shadow purple-font' : 'dep-seeall txt-shadow blue-font'} key={'dep-seall-'+depindex}>VER TODOS</Link>
                        </div>
                    );
                })}
            </div>
        </>
     );
}
 
export default Departament;