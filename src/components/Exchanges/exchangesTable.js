import React from 'react';
import ExchangeTable from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            minHeight: '50px',
        },
        stripedStyle: {
            backgroundColor: "#E5E5E5;"
        },

    },
    headRow: {
        style: {
            backgroundColor: "#c4c4c4",
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
    { id: 1, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 2, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 3, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" }, { id: 8, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 4, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 5, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 6, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 7, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 9, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 10, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 11, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 12, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 13, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 14, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
    { id: 15, name: 'Binance', volume: '$233,433.00', website: "https://Binance.com", volume: "1.65%", trust: "https://www.coingecko.com/coins/1/sparkline" },
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
                                striped={true}
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