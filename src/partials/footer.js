import React from 'react';
import './styles/footer.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export default function Footer() {
    let listLinks = [
        { name: "List a coin", link: "/list-coin" },
        { name: "List an Exchange", link: "/list-exchange" },
        { name: "List an ICO/IEO", link: "/list-ico" },
        { name: "Methodology", link: "/methodology" }
    ]

    let aboutLink = [
        { name: "Advertise", link: "/advertise" },
        { name: "Press Release", link: "/press-release" },
        { name: "Guest Post", link: "/guess-post" },
        { name: "Submit Event", link: "/submit-event" }
    ]


    const linkItems = listLinks.map((link) =>
        <li className="pb-4">
            <Router>
                <Link key={link.name} to={link.link}>{link.name}</Link>
            </Router>
        </li>
    );
    const aboutLinks = aboutLink.map((link) =>
        <li className="pb-4">
            <Router>
                <Link key={link.name} to={link.link}>{link.name}</Link>
            </Router>
        </li>
    );
    return (
        <footer className="pt-4 pb-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="./assets/logo.svg" height="50" width="50" />
                        <p className="mt-3 text-light about">Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit<br />
, sed do eiusmod tempor i</p>

                    </div>
                    <div className="col-md-4">

                        <ul>
                            <h5>About Us</h5>
                            {linkItems}
                        </ul>
                    </div>
                    <div className="col-md-4">


                        <ul>
                            <h5>About Us</h5>
                            {aboutLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}