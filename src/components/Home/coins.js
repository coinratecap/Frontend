import React from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            minHeight: '50px', // override the row height
        }
    },

};
const conditionalStyles = [
    {
        when: cells => cells.hr_24 === "3.22%",
        style: {
            color: 'red',
        },
    }
]
const columns = [
    {
        name: '#',
        selector: 'id',
        cell: row => <div><i className="far fa-star"></i> {row.id}</div>,

        sortable: true,
    },
    {
        name: 'Coin',
        selector: 'coin',
        cell: row => <div> <img src="./assets/btclogo.svg" className="pr-1" />{row.coin}</div>,
        sortable: true,
    },
    {
        name: 'Price',
        selector: 'price',
        sortable: true,
    },
    {
        name: '1hr',
        selector: 'hr_1',
        cell: row => <div style={{ color: "red" }}>{row.hr_1}</div>,
        sortable: true,
    },
    {
        name: '24hr',
        selector: 'hr_24',
        cell: row => <div style={{ color: "green" }}>{row.hr_24}</div>,
        sortable: true,
    },
    {
        name: 'Volume',
        selector: 'volume',
        cell: row => <div style={{ color: "red" }}>{row.volume}</div>,
        sortable: true,
    },
    {
        name: 'Market Cap',
        selector: 'marketCap',
        sortable: true,
    },
    {
        name: 'Liquidity',
        selector: 'liquidity',
        sortable: true,
    },
    {
        name: '7 days change',
        selector: 'DaysChange_7',
        sortable: true,
    },
];
const data = [
    { id: 1, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "0.4333%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 2, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "4.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 3, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "55.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 4, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 5, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 6, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 7, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 8, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 9, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 10, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 11, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },
    { id: 12, coin: 'Bitcoin', price: '$233,433.00', hr_1: "4.23%", hr_24: "3.22%", volume: "1.65%", liquidity: "$33,322.000", marketCap: "$233,433.00", DaysChange_7: "rr" },

];

let links = [
    { name: "Newly Added", link: "/newly-added" },
    { name: "Defi", link: "/defi" },
    { name: "Exchange", link: "/exchange" },
    { name: "Wallet", link: "/wallet" },
    { name: "High/Low", link: "/high-low" },
    { name: "Trending", link: "/trending" },
    { name: "Community", link: "/community" }
]



const linkItems = links.map((link, index) =>
    <li className="nav-item active mx-2" key={index}>
        <a className="nav-link" key={index} href={link.link}>{link.name}</a>
    </li>
);


const Coin = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light coin-header mt-5">
                                <div className="container-fluid">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#subnavbarNav" aria-controls="subnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-center" id="subnavbarNav">
                                        <ul className="navbar-nav">
                                            {linkItems}
                                        </ul>
                                    </div>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Show rows</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                    </div>
                                    <button className="btn sign-up mx-1">Search Coin</button>
                                </div>
                            </nav>
                            <DataTable
                                noHeader={true}
                                columns={columns}
                                customStyles={customStyles}
                                data={data}
                                pagination={true}
                                paginationPerPage={10}
                                conditionalCellStyles={conditionalStyles}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Coin