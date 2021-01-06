import React from 'react';
import './exchange.css'

const ExchangeHeader = (prop) => {
    return (
        <section id="exchange-header" className="d-flex align-items-end">
            <div className="container">
                <div className="row bg-wrapper">
                    <div className="col-md-8 offset-md-2">
                        <h3>{prop.title}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExchangeHeader