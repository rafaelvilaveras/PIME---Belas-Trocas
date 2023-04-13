import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Snitems from './snitems';


import '../../css/App.css';
import '../../css/navbar.css';

const Subnav = ({codintionP}) => {

    const teste1 = [
        {
            departamento:'Eletronicos',
            subdepartamento: [
                'Pendrives',
                'Fones de ouvido',
                'Celulares'
            ]

        }
    ]
    const teste2 = [
        {
            departamento: 'Livros Fisicos',
            subdepartamento:[
                'Academicos',
                'Escolares',
                'Literários',
                'Auto Ajuda',
                'Conhecimentos Gerais',
            ]
        }
    ]
    const teste3 = [
        {
            departamento: 'materiais',
            subdepartamento:[
                'Escolares e Acadêmicos',
                'Bolsas',
                'Lápis',
            ]
        }
    ]

    const [teste, setTeste] = useState(0)

    return ( 
        <>
            <ul onMouseEnter={()=>{setTeste(0)}} className={codintionP ? 'display-none' : 'flex-row snav-container'}>
                <hr/>
                <li onMouseOver={() => {setTeste(1)}} onMouseOut={()=>{setTeste(0)}} className='flex-column sn-container'>
                    <Link className='nav-links' to={'/eletronicos'}>{teste1[0].departamento.toUpperCase()}</Link>
                    <Snitems
                        teste = {teste1}
                        snActive={teste}
                        position = {1}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {setTeste(2)}} onMouseOut={()=>{setTeste(0)}} className='sn-container' onMouseEnter={() => {}}>
                    <Link className='nav-links' to={'/livros fisicos'}>{teste2[0].departamento.toUpperCase()}</Link>
                    <Snitems
                        teste = {teste2}
                        snActive={teste}
                        position = {2}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {setTeste(3)}} onMouseOut={()=>{setTeste(0)}} className='sn-container' onMouseEnter={() => {}}>
                    <Link className='nav-links' to={'/materiais'}>{teste3[0].departamento.toUpperCase()}</Link>
                    <Snitems
                        teste = {teste3}
                        snActive={teste}
                        position = {3}
                    />
                    
                </li>
                <hr/>
            </ul>
        </>
     );
}
 
export default Subnav;