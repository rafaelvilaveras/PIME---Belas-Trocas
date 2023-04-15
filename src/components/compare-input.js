import React, { useRef, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


import '../css/App.css';
import '../css/compare-input.css';

const CompareInput = ({type}) => {

    

    const [valid, setValid] = useState('');
    const [see, setVis] = useState(false);
    const [seeC, setVisC] = useState(false);

    const oiRef = useRef(null);

    function validateItem(origin, validate) {
        return(origin === validate)
    };


    const portugues = () => {
        switch (type.toLowerCase()) {
            case 'password':
                return 'senha';
            case 'email':
                return 'email';
        
            default:
                return '';
        }
    };

    return ( 
        <>
        
            <div className='c-input-container'>
                <input
                    ref={oiRef}
                    name={type.toUpperCase()}
                    className='c-input'
                    type={type === 'password' ? see ? 'text' : 'password' : type }
                    placeholder={portugues().toUpperCase()}
                    autoComplete={type === 'password' ? 'off' : ''}
                    onChange={(e)=>{
                        setValid('')
                    }}
                    required
                />
                <AiFillEye
                    style={{display: type === 'password' ? '' : 'none'}}
                    className={seeC ? 'c-icon' : 'display-none'}
                    onClick={(e)=>{
                        e.preventDefault()
                        setVisC(false)
                    }}
                />
                <AiFillEyeInvisible
                    style={{display: type === 'password' ? '' : 'none'}}
                    className={seeC ? 'display-none' : 'c-icon'}
                    onClick={(e)=>{
                        e.preventDefault()
                        setVisC(true)
                    }}
                />
            </div>

            <div className='c-input-container'>    
                <input
                    name={'C'+type.toUpperCase()}
                    className={valid === ('') ? 'c-input ': valid === true ? 'c-input c-true' : 'c-input c-false' }
                    type={type === 'password' ? seeC ? 'text' : 'password' : type }
                    placeholder={'CONFIRME '+portugues().toUpperCase()}
                    autoComplete={type === 'password' ? 'off' : ''}
                    onChange={(e)=>{
                        e.target.value === '' ? setValid('') : setValid(validateItem(oiRef.current.value, e.target.value))
                    }}
                    required
                />
                <AiFillEye
                    style={{display: type === 'password' ? '' : 'none'}}
                    className={see ? 'c-icon' : 'display-none'}
                    onClick={(e)=>{
                        e.preventDefault()
                        setVis(false)
                    }}
                />
                <AiFillEyeInvisible
                    style={{display: type === 'password' ? '' : 'none'}}
                    className={see ? 'display-none' : 'c-icon'}
                    onClick={(e)=>{
                        e.preventDefault()
                        setVis(true)
                    }}
                />
            </div>


                 
        </>
     );
}
 
export default CompareInput;