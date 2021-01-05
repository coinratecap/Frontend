import "./dataTab.sass";
function App() {
	return (
		<div className="tabs">
			<div className="currency">
				<select>
					<option value="usd">USD</option>
					<option value="eur">EUR</option>
					<option value="sbo">GBP</option>
					<option value="jpy">Mango</option>
				</select>
			</div>
			<div className="nav">
				<ul>
					<li>
						<a href="http://localhost:3000/">Newly added</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Defi</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Exchanges</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Wallets</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Resorces</a>
					</li>
					<li>
						<a href="http://localhost:3000/">High/Low</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Trending</a>
					</li>
				</ul>
			</div>
			<div className="rows">
				<select>
					<option value="usd">Show rows 5</option>
					<option value="eur">Show rows 10</option>
					<option value="sbo">Show rows 50</option>
					<option value="jpy">Show rows 100</option>
				</select>
			</div>
			<div className="search">
				<input type="text" value="" placeholder="Search Coin" />
			</div>
		</div>
	);
}

export default App;
