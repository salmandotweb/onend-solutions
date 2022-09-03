import React from "react";
import Button from "../../components/global/Button";
import { BsArrowRight } from "react-icons/bs";
import classes from "./WhoWeAreSection.module.css";

const WhoWeAreSection = () => {
	return (
		<section className={classes.whoWeAreSection}>
			<p>Who We Are</p>
			<h3>
				Onend is a digital solution for a product agency that relates people
				relations with products, story development, and other services.
			</h3>
			<Button styles={classes.getConsultationBtn}>
				Get a free consultation
				<BsArrowRight />
			</Button>
		</section>
	);
};

export default WhoWeAreSection;
