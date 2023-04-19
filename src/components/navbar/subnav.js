import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Snitems from './snitems';


import '../../css/App.css';
import '../../css/navbar.css';
import padronizeUrl from '../functions/padronizeUrl';

const Subnav = ({codintionP}) => {

    const navItems = [
        {
            departamento:'Eletrônicos',
            subdepartamento: [
                'Pendrives',
                'Fones de ouvido',
                'Celulares'
            ]

        },
        {
            departamento: 'Livros Físicos',
            subdepartamento:[
                'Acadêmicos',
                'Escolares',
                'Literários',
                'Auto Ajuda',
                'Conhecimentos Gerais',
            ]
        },
        {
            departamento: 'Materiais',
            subdepartamento:[
                'Escolares e Acadêmicos',
                'Bolsas',
                'Lápis',
            ]
        }
    ]

    const [window, toggleWindow] = useState(0)

    return ( 
        <>
            <ul className={codintionP ? 'display-none' : 'flex-row snav-container'}>
                <hr/>
                <li className='flex-column sn-container'>
                    <Link className='nav-links txt-shadow' to={'/d/geral'}>TODOS DEPARTAMENTOS</Link>
                </li>
                <hr/>
                <li onMouseOver={() => {toggleWindow(1)}} onMouseOut={()=>{toggleWindow(0)}} className='flex-column sn-container'>
                    <Link className='nav-links txt-shadow' to={padronizeUrl('/d/'+navItems[0].departamento)}>{navItems[0].departamento.toUpperCase()}</Link>
                    <Snitems
                        navItems = {navItems[0]}
                        snActive={window}
                        position = {1}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {toggleWindow(2)}} onMouseOut={()=>{toggleWindow(0)}} className='sn-container'>
                    <Link className='nav-links txt-shadow' to={padronizeUrl('/d/'+navItems[1].departamento)}>{navItems[1].departamento.toUpperCase()}</Link>
                    <Snitems
                        navItems = {navItems[1]}
                        snActive={window}
                        position = {2}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {toggleWindow(3)}} onMouseOut={()=>{toggleWindow(0)}} className='sn-container'>
                    <Link className='nav-links txt-shadow' to={padronizeUrl('/d/'+navItems[2].departamento)}>{navItems[2].departamento.toUpperCase()}</Link>
                    <Snitems
                        navItems = {navItems[2]}
                        snActive={window}
                        position = {3}
                    />
                </li>
                <hr/>
            </ul>
        </>
     );
}
 
export default Subnav;