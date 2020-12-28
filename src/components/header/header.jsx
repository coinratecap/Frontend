import "./header.sass";
import logo from "../../assets/images/logo.png";
function App() {
	return (
		<div className="header">
			<div className="logo">
				<a href="http://localhost:3000/">
					<img src={logo} alt="The coinratecap logo" />
				</a>
			</div>
			<div className="nav">
				<ul>
					<li>
						<a href="http://localhost:3000/">Home</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Markets</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Tools</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Blog</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Resorces</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Portfolio</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Events</a>
					</li>
					<li>
						<a href="http://localhost:3000/">Community</a>
					</li>
				</ul>
			</div>
			<div className="signup">
				<button>
					<a href="http://localhost:3000/">Sign Up</a>
				</button>
			</div>
		</div>
	);
}

export default App;
