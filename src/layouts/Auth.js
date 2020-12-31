import React from 'react'
import Navbar from '../partials/navbar';
import AppFooter from '../partials/footer';

function Auth({children}) { 
    return (
        <div>
            <Navbar />

            {children}

            <AppFooter />
        </div>
    );
}

export default Auth
