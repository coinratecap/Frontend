import React, { useEffect, useState } from "react";
import CoinTable from "react-data-table-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import requestClient from "../../services/axiosClient";

const customStyles = {
  rows: {
    style: {
      minHeight: "75px",
      borderBottomWidth: "1px",
      outlineColor: "#f7f8fb",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
        transition: "all 200ms ease- out 0s",
      },
    },
  },
};

const conditionalStyles = [
  {
    when: (cells) => cells.hr_24 === "3.22%",
    style: {
      color: "red",
    },
  },
];

const columns = [
  {
    name: "#",
    selector: "id",
    cell: (row) => (
      <div>
        <i className="far fa-star"></i> {row.id}
      </div>
    ),

    sortable: true,
  },
  {
    name: "Coin",
    selector: "coin",
    cell: (row) => (
      <div>
        <a href="#">
          <img src={row.coinImg} className="pr-1" />
          <b>{row.coin}</b>
        </a>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
  },
  {
    name: "1hr",
    selector: "hr_1",
    cell: (row) => <div style={{ color: "red" }}>{row.hr_1}</div>,
    sortable: true,
  },
  {
    name: "24hr",
    selector: "hr_24",
    cell: (row) => <div style={{ color: "green" }}>{row.hr_24}</div>,
    sortable: true,
  },
  {
    name: "Volume",
    selector: "volume",
    cell: (row) => <div style={{ color: "red" }}>{row.volume}</div>,
    sortable: true,
  },
  {
    name: "Market Cap",
    selector: "marketCap",
    sortable: true,
  },
  {
    name: "Liquidity",
    selector: "liquidity",
    sortable: true,
  },
  {
    name: "7 days change",
    selector: "daysChange_7",
    cell: (row) => <img src={row.daysChange_7} />,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "0.4333%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 2,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "4.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 3,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "55.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 4,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 5,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 6,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 7,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 8,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 9,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 10,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 11,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
  {
    id: 12,
    coin: "Bitcoin",
    price: "$233,433.00",
    hr_1: "4.23%",
    hr_24: "3.22%",
    volume: "1.65%",
    liquidity: "$33,322.000",
    marketCap: "$233,433.00",
    daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
  },
];

let links = [
  { name: "Newly Added", link: "/newly-added" },
  { name: "Defi", link: "/defi" },
  { name: "Exchanges", link: "/exchanges" },
  { name: "Wallet", link: "/wallet" },
  { name: "High/Low", link: "/high-low" },
  { name: "Trending", link: "/trending" },
  { name: "Community", link: "/community" },
];

const linkItems = links.map((link, index) => (
  <Router>
    <li className="nav-item active mx-2" key={index}>
      <a className="nav-link" key={index} href={link.link}>
        {link.name}
      </a>
    </li>
  </Router>
));

const Coin = () => {
  const [_data, setData] = useState([]);

  useEffect(() => {
    requestClient
      .get("/v1/coin")
      .then((res) => {
        console.log("Response =======>", res.data);
        const fData = res.data.data.map((coin) => ({
          id: coin._id,
          coin: coin.name,
          coinImg: coin.logo,
          price: "$233,433.00",
          hr_1: "4.23%",
          hr_24: "0.4333%",
          volume: "1.65%",
          liquidity: "$33,322.000",
          marketCap: "$233,433.00",
          daysChange_7: "https://www.coingecko.com/coins/1/sparkline",
        }));

        setData(fData);
      })
      .catch((error) => {
        console.log("ERROR =========+>", error.response.data);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light coin-header mt-5">
                <div className="container-fluid">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </div>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#subnavbarNav"
                    aria-controls="subnavbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="subnavbarNav"
                  >
                    <ul className="navbar-nav">{linkItems}</ul>
                  </div>
                </div>
              </nav>

              <CoinTable
                noHeader={true}
                columns={columns}
                customStyles={customStyles}
                data={_data}
                pagination={true}
                paginationPerPage={10}
                conditionalCellStyles={conditionalStyles}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Coin;
