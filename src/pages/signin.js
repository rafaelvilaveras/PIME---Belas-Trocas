import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import '../css/App.css';
import '../css/signin.css';
import Button from '../components/button';
import CompareInput from '../components/compare-input';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate()

    function handleSubmit(e) {
        console.log(
                e.target.USERNAME.value,
                e.target.RM.value,
                e.target.EMAIL.value,
                e.target.PASSWORD.value,
                e.target.CAMPUS.value
            );

            // alert('Cadastro efetuado sem validações!');

            // navigate('/entrar');

    }

    return ( 
        <>
            <div className='flex-column s-page'>
                <form id='sign_form' className='flex-column s-container' onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit(e);
                }}>
                    <span className='s-title'>Cadastro Usuário</span>
                    <div className='input-boxes prevent-select'>
                        <input
                            name='USERNAME'
                            className='a-input'
                            type='text'
                            placeholder='NOME COMPLETO'
                            required
                        />
                        <input
                            name='RM'
                            className='a-input'
                            type='text'
                            maxLength={8}
                            placeholder='REGISTRO DE MATRÍCULA'
                            required
                        />
                    </div>
                    <div className='input-boxes prevent-select'>
                        <CompareInput
                            type={'email'}
                        />
                    </div>
                    <div className='input-boxes prevent-select'>
                        <CompareInput
                            type={'password'}
                        />
                    </div>
                    <div className='input-boxes prevent-select'>                        
                        <select
                                name='CAMPUS'
                                className='s-input'
                                required
                            >
                                <option hidden>Campus</option>
                                <option value={1}>Paraíso</option>
                                <option value={2}>Vila Mariana</option>
                                <option value={3}>Shop. Cidade Jardim</option>
                                <option value={4}>Sorocaba-Votorantim</option>
                            </select>
                    </div>
                    <div className='flex-column sb-container prevent-select'>                        
                        <span>Ao clicar em cadastrar você está concordando com os <a className='s-terms'>termos de uso</a>.</span>
                        <Button content={'Cadastrar'} type={'submit'} value={''}/>
                    </div>

                </form>
            </div>
        </>
     );
}
 
export default Signin;