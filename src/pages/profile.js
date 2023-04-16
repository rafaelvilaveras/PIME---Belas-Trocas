import React, { useRef, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import '../css/App.css';
import '../css/profile.css';
import '../css/signin.css';

import CompareInput from '../components/compare-input';
import Button from '../components/button';

const Profile = () => {

    const [valState, setValState] = useState('');
    const [changePw, toggleChangePw] = useState(false);
    const opref = useRef(null);
    const pFormRef = useRef(null);

    // ipw => input password
    // bpw => data base password
    function validate(ipw, dbpw) {
        return (ipw === dbpw)
    };

    function cancelOperation(formRef) {
        formRef.current.TPASSWORD.value = '';
        formRef.current.PASSWORD.value = '';
        formRef.current.CPASSWORD.value = '';
        setValState('');
        toggleChangePw(false);
    };

    function handlePSubmit(e){
        console.log(e.target.PASSWORD.value)
        console.log(e.target.TPASSWORD.value)
        console.log(e.target.CPASSWORD.value)

    };

    return ( 
        <>
            <div className='flex-column p-page'>
                <div className='flex-column p-container'>
                    <div className='flex-column p-content'>
                        <span className='p-title'>Perfil do usuário</span>
                        <div className='flex-row p-inner-content'>
                            <input
                                className='a-input'
                                placeholder='USUÁRIO'
                                disabled
                            />
                            <input
                                className='a-input'
                                placeholder='RM'
                                disabled
                            />
                        </div>
                        <div className='flex-row p-inner-content'>
                            <input
                                className='a-input'
                                placeholder='EMAIL'
                                disabled
                            />
                            <input
                                className='a-input'
                                placeholder='CAMPUS'
                                disabled
                            />
                        </div>
                        <div>
                            <button className={ changePw ? 'display-none' : 'cb p-button'} type='button' onClick={()=>{toggleChangePw(true)}}>Trocar Senha</button>
                        </div>
                    </div>
                    <form ref={pFormRef} className={changePw ? 'flex-column p-form' : 'display-none'} onSubmit={(e)=>{
                        e.preventDefault();
                        handlePSubmit(e);
                    }}>
                        <fieldset className='flex-row p-fs prevent-select'>
                            <div className='flex-row op-container'>
                                <input
                                    name='TPASSWORD'
                                    ref={opref}
                                    placeholder='SENHA ATUAL'
                                    className={(valState === '') ? 'a-input' : (valState) ? 'a-input a-true' : 'a-input a-false'}
                                    type='password'
                                    autoComplete='off'
                                    onClick={()=>{setValState('')}}
                                    onChange={()=>{setValState('')}}
                                />
                                <AiOutlineReload className='p-icon' onClick={(e)=>{
                                    setValState(validate('teste', opref.current.value))
                                }}/>
                            </div>

                        </fieldset>
                        <fieldset className='flex-row p-fs'>
                            <CompareInput
                                type={'password'}
                            />
                        </fieldset>
                        <div className='p-button-container'>
                            <button className='cb p-button' type='button' onClick={()=>{cancelOperation(pFormRef)}}>Cancelar</button>                            
                            <Button cN={'p-button'} content={'Confirmar'} value={'submit'} type={'submit'}/>
                        </div>
                    </form>
                </div>

            </div>
        </>
     );
}
 
export default Profile;