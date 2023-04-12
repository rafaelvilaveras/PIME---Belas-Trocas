import React from 'react';
import HomeSlider from '../components/home/home-slider';
import ItemList from '../components/home/item-list';

import '../css/App.css';
import '../css/home.css';

const Home = () => {
    return ( 
        <>
            <div className='flex-column home-container'>
                <HomeSlider/>
                <div className='flex-row l-gap'>
                    <ItemList/>
                    <ItemList/>
                </div>
            </div>
        </>
     );
}
 
export default Home;