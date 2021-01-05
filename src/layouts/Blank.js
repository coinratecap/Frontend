import React from 'react'
import Navbar from '../partials/navbar';
import AppFooter from '../partials/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Blank({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <AppFooter />
        </div>
    );
}

export default Blank
