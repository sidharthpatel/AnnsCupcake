import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./navbar.css";
import cupcakeLogo from "../../assets/cupcake-logo.jpg";

const Navbar: React.FC = () => {
	return (
		<header className="header">
			<a>
				<img src={cupcakeLogo} />
			</a>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cupcakes">Cupcakes</Link>
					</li>
					<li>
						<Link to="/new-arrivals">New Arrivals</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<div className="icons">
				<div className="search-icon">
					<i className="fas fa-search"></i>
				</div>
				<div className="cart-icon">
					<i className="fas fa-cart-arrow-down"></i>
				</div>
				<div className="menu-icon">
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
