import React from 'react';
import Blank from '../layouts/Blank';
import CoinComponent from '../components/Home/coins';
import Market from '../components/Home/market'

export default function Home() {
    return (
        <Blank>
            <Market title="Top Currency" />
            <CoinComponent />
        </Blank>
    )
}