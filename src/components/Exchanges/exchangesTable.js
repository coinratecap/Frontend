import React from 'react';
import ExchangeTable from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            minHeight: '75px',
            borderBottomWidth: "1px",
            outlineColor: "#f7f8fb",
            '&:hover': {
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
                transition: "all 200ms ease- out 0s",
            },
        },
    },
    headRow: {
        style: {
            backgroundColor: "#eff0f3",
        }
    },
    headCells: {
        style: {
            fontWeight: 900
        }
    }

};

const columns = [
    {
        name: 'S/N',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        cell: row => <div> <img src="./assets/btclogo.svg" className="pr-1" />{row.name}</div>,
        sortable: true,
    },
    {
        name: 'Website',
        selector: 'website',
        sortable: true,
    },
    {
        name: 'Volume',
        selector: 'volume',
        sortable: true,
    },
    {
        name: 'Trust',
        selector: 'trust',
        sortable: true,
    }

];

const data = [
    { id: 1, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "3.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 2, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "5.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 3, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "54.65%", trust: "https://www.coingecko.com/coins/1/sparkline" }, { id: 8, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 4, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "53.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 5, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "153.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 6, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "124.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 7, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1353.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 9, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "135.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 10, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "12.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 11, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "13.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 12, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "18.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 13, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "188.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 14, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "109.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 15, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "132.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
];

const Exchanges = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12">
                            <ExchangeTable
                                noHeader={true}
                                columns={columns}
                                data={data}
                                customStyles={customStyles}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Exchanges