import React, { useState } from 'react'
import './styles/navbar.css'
export default function Navbar() {

    let links = [
        { name: "Home", link: "/" },
        { name: "Markets", link: "/markets" },
        { name: "Tools", link: "/tools" },
        { name: "Blog", link: "/blog" },
        { name: "Resorces", link: "/resources" },
        { name: "Portfolio", link: "/porfolio" },
        { name: "Events", link: "/events" },
        { name: "Community", link: "/community" }]


    const linkItems = links.map((link, index) =>
        <li className="nav-item active mx-4" key={index}>
            <a className="nav-link nav-linker-anchor" key={index} href={link.link}>{link.name}</a>
        </li>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./assets/logo.svg" width="40" height="40" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        {linkItems}
                    </ul>
                </div>
                <button className="btn btn-warning px-4 border-0">Sign up</button>
            </div>

        </nav>

    )
}
