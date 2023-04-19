import React from 'react';

import '../css/App.css';
import '../css/item-card.css';
import { Link } from 'react-router-dom';
import padronizeUrl from './functions/padronizeUrl';

const Itemcard = ({className, classImg, index, item, url}) => {

    /*  
        className {
            flex: {x} {y} {z}%; ->  flex-grow, flex-shrink, flex-basis.
            min-width: {n}rem;  ->  'n' é Número escolhido pelo programador
                                    o mesmo vale para os outros 'n'.
        }
        
        classImg {
            width: {n}%;
            height: {n}vh;
            max-height: {n}rem;
        }

    */

    return ( 
        <>
            <Link className={'flex-column ic-container' +' '+className} to={padronizeUrl(url)} key={'ic-'+index}>
                <div className='flex-column ic-content' key={'ic-content'+index}>
                    <span className='ic-user txt-shadow' key={'ic-user'+index}>{item.user}</span>
                    <div className={'ic-img-container'+' '+classImg} key={'ic-img-container'+index}>
                        <img src={item.data.img} key={'ic-img'+index}/>
                    </div>
                    <span className='ic-itemname' key={'ic-itemName'+index}>{item.data.name}</span>
                    <div className='flex-column'>
                        <span key={'ic-itemType'+index}>{item.data.type}</span>
                        <span key={'ic-itemLoc'+index}>{item.data.campus}</span>
                    </div>
                </div>
                <button className='cb ic-button' key={'ic-button'+index}>Eu Quero!</button>
            </Link>
        </>
     );
}
 
export default Itemcard;