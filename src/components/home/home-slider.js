import React, { useState } from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import {SlArrowRight, SlArrowLeft} from 'react-icons/sl';

import '../../css/App.css';
import '../../css/slider.css';

import teste1 from '../../images/slider/CE1.png';
import teste2 from '../../images/slider/teste2.jpg';
import teste3 from '../../images/slider/teste3.jpg';
import teste4 from '../../images/slider/teste4.jpg';


const HomeSlider = () => {

    const teste = [teste1, teste2, teste3, teste4];
    const [index, setIndex] = useState(0);
    const [trigger, setTrigger] = useState(0);
    const [pause, setPause] = useState(false);

    // Verificar Depois

    // const autoSlider = () => {
    //     if(!pause){
    //         setTimeout(()=>{
    //             index === teste.length-1 ? setIndex(0) : setIndex(index+1)
    //             console.log()
    //         }, 8 * 1000);

    //     }
    // }

    // useEffect(()=>{
    //     autoSlider()
    // },[index]);


    return (
        <>
            <div className='flex-row slider-container prevent-select'>
                <div onClick={()=>{index === 0 ? setIndex(teste.length-1) : setIndex(index-1)}} className='arrow-container left'>
                    {/* <BsArrowLeftCircleFill /> */}
                    <SlArrowLeft/>
                </div>
                <div onMouseOver={()=>{setPause(true)}} onMouseOut={()=>{setPause(false)}} className='flex-row slider-wrapper'>
                    {teste.map((item, i)=>{
                        return(
                            <div key={'image'+i} className={i === index ? 'image-container' : 'display-none'}>
                                <img loading='lazy' src={item}/>
                            </div>
                        );
                    })}
                <div className='dot-container'>
                    {teste.map((item, i)=>{
                            return ( <GoPrimitiveDot key={'dot'+i} className={i === index ? 'activeDot s-dot' : ''}/> );
                        })}
                </div>
                </div>

                <div onClick={()=>{index === teste.length-1 ? setIndex(0) : setIndex(index+1)}} className='arrow-container right'>
                    {/* <BsArrowRightCircleFill/> */}
                    <SlArrowRight/>
                </div>
            </div>
        </>
     );
}
 
export default HomeSlider;