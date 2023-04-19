import React, { useEffect, useState } from 'react';

import '../css/App.css';
import '../css/subdepartament.css';
import { useLocation } from 'react-router-dom';
import { depItems20 as depItems } from '../components/placeholder/placeholder';
import Itemcard from '../components/item-card';
import padronizeUrl from '../components/functions/padronizeUrl';

const Subdepartament = () => {



    const [page, setPage] = useState(1);
    const location = useLocation('');
    var count = -1;

    // var nome = "ÁÁÁÁÁÁÁÁ";
    // var nomeTratado = padronizeUrl(nome);

    useEffect(()=>{

    },[page]);


    return ( 
        <>
            <div className='flex-column sd-container'>
                <div className='flex-column sd-content'>
                    <div className='txt-shadow sd-info'>
                        <span>Listando item: <span className='sd-info-name'>{depItems[0].subdepartament}</span></span>
                        <span>exibindo 20 por página</span>
                    </div>
                    <div className='flex-row sd-content-wrapper'>
                        {depItems[0].item.map((item, index)=>{
                            if(count < 9){
                                count++;
                            }else{
                                count = 0;
                            }
                            console.log('index ', index, 'count ', count);
                            return(
                                <>
                                    <Itemcard
                                        className={!(count < 5) ? 'sd-cards bg-light-yellow' : 'sd-cards bg-blue'}
                                        classImg={'sd-img-container'}
                                        index={index}
                                        item={item}
                                        url={padronizeUrl('/i/'+depItems)}
                                    />
                                </>
                            );
                        })}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Subdepartament;