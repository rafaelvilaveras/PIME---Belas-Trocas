import React from 'react';

import '../css/error.css';
import '../css/App.css';

const Error = () => {
    return ( 
        <>
            <div className='flex-column error-container'>
                <h1>A página que você tentou acessar não existe <br/> ou <br/> está sendo construída.</h1>
            </div>
        </>
     );
}
 
export default Error;