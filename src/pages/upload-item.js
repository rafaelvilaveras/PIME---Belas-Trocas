import React, { useRef } from 'react';

import '../css/App.css';
import '../css/upload-items.css';

const UploadItems = () => {

    const upImg = useRef();

    return (
        <div className='flex-column ci-container'>
            <div className='flex-column ci-content'>
                <span className='ci-title'>Cadastre seu item</span>
                <form className='flex-column ci-form' onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className='flex-row ci-form-content'>
                        <fieldset className=' flex-column ci-inputs'>
                            <input type='text'placeholder='Nome do item'/>
                            <textarea/>
                            <div className='flex-row'>
                                <input/>
                                <input/>
                            </div>
                            <input/>
                        </fieldset>
                        <fieldset className='ci-img-container'>
                            <input ref={upImg} id='imgPath' type='file' accept='image/*'/>
                        </fieldset>
                    </div>
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
     );
}
 
export default UploadItems;