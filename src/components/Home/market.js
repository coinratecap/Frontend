import React from 'react';
import './home.css'
function market(props) {
    let coins = [
        { name: "Home" },
        { name: "Markets" },
        { name: "Tools" },
        { name: "Blog" },
    ]
    const coinList = coins.map((coin, index) =>
        <div className="col-md-3 px-0">
            <div className="cur-card ">
                <div className="details">
                    <div className="world text-center pt-1">
                        <img src="./assets/btclogo.svg" />
                    </div>
                    <div className="cur-name">Bitcoin Cash</div>
                    <div className="empty"></div>
                </div>
                <div class="graph">
                    <img src="https://www.coingecko.com/coins/1/sparkline" />
                </div>
            </div>
        </div>
    );


    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="top-currency">{props.title}</h2>
                    </div>
                </div>
                <div className="row">

                    {coinList}

                </div>
            </div>
        </section>
    );
}

export default market;