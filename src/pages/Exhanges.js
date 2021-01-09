import React from 'react';
import Blank from '../layouts/Blank';
import ExchangeHeader from '../components/Exchanges/exhangesHeader';
import ExchangeComponent from '../components/Exchanges/exchangesTable';
import Market from '../components/Home/market'

export default function Exchange() {
    return (
        <Blank>
            <Market title="Top Cryptocurrency Exchanges" />
            {/* <ExchangeHeader title="Top Cryptocurrency Exchanges" /> */}
            <ExchangeComponent />
        </Blank>
    )
}

