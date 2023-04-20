import React from 'react';

import '../css/App.css';
import '../css/departament.css';

import { Link } from 'react-router-dom';
import Itemcard from '../components/item-card';
import padronizeUrl from '../components/functions/padronizeUrl';
import { depItems3 as depItems } from '../components/placeholder/placeholder';
// import { Link, useLocation } from 'react-router-dom'; USAR DEPOIS QUE TIVER FEITO API


const Departament = () => {

    // const location = useLocation();

    // console.log(location.pathname.split('/')[1]) USAR DEPOIS QUE TIVER FEITO A API


    return ( 
        <>
            <div className='flex-column dep-container'>
                {depItems.map((depItems, depindex)=>{
                    return(
                        <div className='flex-column dep-content' key={'departament'+depindex}>
                            <span className='txt-shadow dep-title' key={'dep-title'+depindex}>{depItems.subdepartament.toUpperCase()}</span>
                            <div className='flex-row dep-items-wrapper' key={'dep-wrapper'+depindex}>
                                {depItems.item.map((item, index)=>{
                                    return(
                                        <Itemcard
                                            key={'item-card'+index}
                                            className={depindex%2 ? 'bg-blue dep-cards' : 'bg-pink dep-cards'}
                                            classImg={'dep-img-container'}
                                            index={index}
                                            item={item}
                                            url={'/i/'+item.data.id}
                                        />
                                    );
                                })}
                            </div>
                            <Link to={padronizeUrl('/d/'+depItems.departament+'/'+ depItems.subdepartament)} className={!depindex%2 ? 'dep-seeall txt-shadow purple-font' : 'dep-seeall txt-shadow blue-font'} key={'dep-seall-'+depindex}>VER TODOS</Link>
                        </div>
                    );
                })}
            </div>
        </>
     );
}
 
export default Departament;