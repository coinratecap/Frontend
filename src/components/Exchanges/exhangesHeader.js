import React from 'react';
import './exchange.css'

const ExchangeHeader = (prop) => {
    return (
        <section id="exchange-header" class="d-flex align-items-end">
            <div class="container">
                <div class="row bg-wrapper">
                    <div class="col-md-8 offset-md-2">
                        <h3>{prop.title}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExchangeHeader