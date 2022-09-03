import React from "react";
import Navbar from "../../components/layout/Navbar";
import classes from "./HomeLayout.module.css";

const HomeLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default HomeLayout;
