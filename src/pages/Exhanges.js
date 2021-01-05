import React from 'react';
import Blank from '../layouts/Blank';
import ExchangeHeader from '../components/Exchanges/exhangesHeader';
import ExchangeComponent from '../components/Exchanges/exchangesTable';

export default function Exchange() {
    return (
        <Blank>
            <ExchangeHeader title="Top Cryptocurrency Exchanges" />
            <ExchangeComponent />
        </Blank>
    )
}

