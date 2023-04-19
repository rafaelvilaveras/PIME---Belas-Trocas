import React from 'react';

import '../css/App.css';
import '../css/departament-page.css';
import { Link } from 'react-router-dom';
import padronizeUrl from './functions/padronizeUrl';

const Itemcard = ({className, index, item, url}) => {

    return ( 
        <>
            <Link className={className} to={padronizeUrl(url)} key={'dep-items-'+index}>
                <div className='flex-column dep-items-content' key={'dep-items-content'+index}>
                    <span className='dep-user txt-shadow' key={'dep-user'+index}>{item.user}</span>
                    <div className='dep-img-container' key={'dep-img-container'+index}>
                        <img src={item.data.img} key={'dep-img'+index}/>
                    </div>
                    <span className='dep-itemname' key={'dep-itemName'+index}>{item.data.name}</span>
                    <div className='flex-column'>
                        <span key={'dep-itemType'+index}>{item.data.type}</span>
                        <span key={'dep-itemLoc'+index}>{item.data.campus}</span>
                    </div>
                </div>
                <button className='cb dep-button' key={'dep-button'+index}>Eu Quero!</button>
            </Link>
        </>
     );
}
 
export default Itemcard;