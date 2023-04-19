import React, { useEffect, useState } from 'react';

import '../css/App.css';
import '../css/subdepartament.css';
import { useLocation } from 'react-router-dom';

const Subdepartament = () => {



    const [page, setPage] = useState(1);
    const location = useLocation('');

    // var nome = "ÁÁÁÁÁÁÁÁ";
    // var nomeTratado = padronizeUrl(nome);

    useEffect(()=>{

    },[page]);

    return ( 
        <>
            <div className='sd-container'>
                <div className='sd-content'>
                    <div className='sd-content-wrapper'>
                        <button>Teste</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Subdepartament;