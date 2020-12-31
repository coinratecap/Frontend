import React from 'react';
import Auth from '../layouts/Auth';
import SomeComponent from '../components/Dance';
export default function Home() {
    return (
        <Auth>
            <SomeComponent />
        </Auth>
    )
}