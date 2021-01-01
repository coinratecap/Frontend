import React from 'react';
import Auth from '../layouts/Auth';
import CoinComponent from '../components/Home/coins';
export default function Home() {
    return (
        <Auth>
            <CoinComponent />
        </Auth>
    )
}