import React from 'react';

import '../css/App.css';
import '../css/login.css';
import { Link } from 'react-router-dom';
import Button from '../components/button';

const Login = () => {
    return ( 
        <>
            <div className=' flex-column l-page '>
                <div className='flex-column l-container'>
                    <span className='l-title'>Fazer Login</span>
                    <form className='flex-column l-form' onSubmit={(e) => {
                        e.preventDefault();
                        alert('Pare de clicar aí');
                    }}>
                        <input name='USUARIO' className='l-input' placeholder='EMAIL' maxLength={200}/>
                        <input name='SENHA' className='l-input' placeholder='SENHA'maxLength={15} type='password'/>
                        <Button disabled={false} content={'Entrar'}/>
                    </form>
                    <div className='flex-column l-text'>                        
                        <span>É novo aqui? <Link className='l-link' to={"/cadastro"}>Criar conta</Link></span>
                        <span className='l-link'>Esqueci a senha</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;