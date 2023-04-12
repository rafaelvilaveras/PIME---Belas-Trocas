import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import '../css/App.css';
import '../css/signin.css';
import Button from '../components/button';

const Signin = () => {

    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [validP, setValidP] = useState('');
    const [validE, setValidE] = useState('');
    const [seePw, setVis] = useState(false);
    const [seePwC, setVisC] = useState(false);

    return ( 
        <>
            <div className='flex-column s-page'>
                <form id='sign_form' className='flex-column s-container' onSubmit={(e)=>{
                    e.preventDefault();
                    alert(e.target.USERNAME.value);
                }}>
                    <span className='s-title'>Cadastro Usuário</span>
                    <div className='input-boxes'>
                        <input
                            name='USERNAME'
                            className='s-input'
                            type='text'
                            placeholder='Nome completo'
                            // required
                        />
                        <input
                            name='RM'
                            className='s-input'
                            type='text'
                            maxLength={8}
                            placeholder='Registro de matrícula'
                            // required
                        />
                    </div>
                    <div className='input-boxes'>
                        <input
                            name='EMAIL'
                            className='s-input'
                            type='email'
                            placeholder='Email'
                            onChange={(e) => {
                                setValidE('')
                                setEmail(e.target.value)
                            }}
                            // required
                        />
                        <input
                            name='EMAIL'
                            className={validE === ('') ? 's-input ': validE === true ? 's-input s-true' : 's-input s-false' }
                            type='email'
                            placeholder='Confirme o email'
                            autoComplete='off'
                            onChange={(e)=>{
                                e.target.value === '' ? setValidE('') : e.target.value === email ? setValidE(true)  : setValidE(false)
                            }}
                            // required
                        />
                    </div>
                    <div className='input-boxes'>
                        <input
                            name='PW'
                            className='s-input'
                            type={seePw ? 'text' : 'password'}
                            placeholder='Senha'
                            autoComplete='off'
                            onChange={(e)=>{
                                setValidP('')
                                setPw(e.target.value);
                            }}
                            // required

                        />
                        
                        <AiFillEye
                            className={seePw ? 'pw-icon' : 'display-none'}
                            onClick={(e)=>{
                                e.preventDefault()
                                setVis(false)
                            }}
                        />
                        <AiFillEyeInvisible
                            className={seePw ? 'display-none' : 'pw-icon'}
                            onClick={(e)=>{
                                e.preventDefault()
                                setVis(true)
                            }}
                        />
                        <input
                            name='CPW'
                            className={validP === ('') ? 's-input ': validP === true ? 's-input s-true' : 's-input s-false' }
                            type={ seePwC ? 'text' : 'password'}
                            placeholder='Confirme a senha'
                            autoComplete='off'
                            onChange={(e)=>{
                                e.target.value === '' ? setValidP('') : e.target.value === pw ? setValidP(true)  : setValidP(false)
                            }}
                            // required

                        />
                        
                        <AiFillEye
                            className={seePwC ? 'pwC-icon' : 'display-none'}
                            onClick={(e)=>{
                                e.preventDefault()
                                setVisC(false)
                            }}
                        />
                        <AiFillEyeInvisible
                            className={seePwC ? 'display-none' : 'pwC-icon'}
                            onClick={(e)=>{
                                e.preventDefault()
                                setVisC(true)
                            }}
                        />
                    </div>
                    <div className='input-boxes'>                        
                        <select
                                name='CAMPUS'
                                className='s-input'
                                // required
                            >
                                <option hidden>Campus</option>
                                <option value={1}>Paraíso</option>
                                <option value={2}>Vila Mariana</option>
                                <option value={3}>Shop. Cidade Jardim</option>
                                <option value={4}>Sorocaba-Votorantim</option>
                            </select>
                    </div>
                    <div className='flex-column sb-container'>                        
                        <span>Ao clicar em cadastrar você está concordando com os <a className='s-terms'>termos de uso</a>.</span>
                        <Button disabled={!(validP && validE)} content={'Cadastrar'}/>
                    </div>

                </form>
            </div>
        </>
     );
}
 
export default Signin;