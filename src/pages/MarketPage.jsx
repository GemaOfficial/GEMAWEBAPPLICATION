import React from 'react';
import Brands from '../components/market/Brands';
import Market from '../components/market/Market';
import MarketCards from '../components/market/MarketCards';

function MarketPage() {
    return (
        <>
         <Market />
         <MarketCards />
         <Brands />   
        </>
    );
}

export default MarketPage;