import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__logo}>
				<img src="/assets/logo.png" alt="logo" />
			</div>
			<ul className={classes.navbar__links}>
				<li>Home</li>
				<li>Services</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
