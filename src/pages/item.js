import React, { useEffect, useState } from 'react';

import '../css/App.css';
import '../css/item-page.css';

import { item } from '../components/placeholder/placeholder';
import { useDispatch } from 'react-redux';
import { toggleTD } from '../redux-features/site-reducer';

const ItemPage = ({itemID}) => {

    const [imgIndex, setImgIndex] = useState(0)
    
    useEffect(()=>{

    },[])

    const dispatch = useDispatch();

    return ( 
        <>
            <div className='flex-column ip-container'>
                <div className='flex-row ip-content'>
                    <div className='flex-row ip-image-container'>
                        <div className='flex-column ip-img-selector-container'>
                            {item[0].item.data.img.map((ISImg, ISIndex)=>{
                                return(
                                    <div onClick={()=>{setImgIndex(ISIndex)}} className={(ISIndex === imgIndex) ? 'flex-column ip-img-selector active-img' : 'flex-column ip-img-selector'} key={'ip-img-selector'+ISIndex}>
                                        <img src={ISImg} key={'IS-img'+ISIndex}/>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='ip-img-big'>
                            <img src={item[0].item.data.img[imgIndex]}/>
                        </div>
                    </div>
                    
                    <div className='flex-column ip-text-info'>
                        <span className='ip-title'>{item[0].item.name}</span>
                        <span className='ip-description'>{item[0].item.description}</span>
                        <span className='txt-shadow ip-user'>{item[0].item.user}</span>
                        <span className='ip-type'>{item[0].item.data.type}</span>
                        <div className='flex-row ip-adjust'>
                            <span className='ip-campus'>{'Campus Belas Artes '+item[0].item.data.campus}</span>
                            <button className='ip-button' onClick={()=>{dispatch(toggleTD({type: item[0].item.data.type}))}}>Eu Quero!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ItemPage;