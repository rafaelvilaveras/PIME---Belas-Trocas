import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Snitems from './snitems';


import '../../css/App.css';
import '../../css/navbar.css';

const Subnav = ({codintionP}) => {

    const navItems = [
        {
            departamento:'Eletronicos',
            subdepartamento: [
                'Pendrives',
                'Fones de ouvido',
                'Celulares'
            ]

        },
        {
            departamento: 'Livros Fisicos',
            subdepartamento:[
                'Academicos',
                'Escolares',
                'Literários',
                'Auto Ajuda',
                'Conhecimentos Gerais',
            ]
        },
        {
            departamento: 'materiais',
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
            <ul onMouseEnter={()=>{toggleWindow(0)}} className={codintionP ? 'display-none' : 'flex-row snav-container'}>
                <hr/>
                <li onMouseOver={() => {toggleWindow(1)}} onMouseOut={()=>{toggleWindow(0)}} className='flex-column sn-container'>
                    <Link className='nav-links' to={'/eletronicos'}>{navItems[0].departamento.toUpperCase()}</Link>
                    <Snitems
                        navItems = {navItems[0]}
                        snActive={window}
                        position = {1}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {toggleWindow(2)}} onMouseOut={()=>{toggleWindow(0)}} className='sn-container' onMouseEnter={() => {}}>
                    <Link className='nav-links' to={'/livros fisicos'}>{navItems[1].departamento.toUpperCase()}</Link>
                    <Snitems
                        navItems = {navItems[1]}
                        snActive={window}
                        position = {2}
                    />
                </li>
                <hr/>
                <li onMouseOver={() => {toggleWindow(3)}} onMouseOut={()=>{toggleWindow(0)}} className='sn-container' onMouseEnter={() => {}}>
                    <Link className='nav-links' to={'/materiais'}>{navItems[2].departamento.toUpperCase()}</Link>
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