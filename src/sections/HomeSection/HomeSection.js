import React from "react";
import Button from "../../components/global/Button";
import { BsArrowRight } from "react-icons/bs";
import classes from "./HomeSection.module.css";

const HomeSection = () => {
	return (
		<section className={classes.homeSection}>
			<div className={classes.left}>
				<h1>Let's build products together for life</h1>
				<p>
					Onend is a digital solution for a product agency that relates people
					relations, story development.
				</p>
				<div className={classes.leftBottom}>
					<Button>
						Get Started
						<BsArrowRight />
					</Button>
					<img src="/assets/arrow.svg" alt="" className={classes.arrow} />
				</div>
			</div>
			<div className={classes.right}>
				<img src="/assets/homeGraph.svg" alt="" />
			</div>
			<img
				src="/assets/homeGraphics.svg"
				alt=""
				className={classes.homeGraphics}
			/>
		</section>
	);
};

export default HomeSection;
