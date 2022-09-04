import React, { useState } from "react";
import Button from "../../components/global/Button";
import { BsArrowRight } from "react-icons/bs";
import classes from "./HomeSection.module.css";

const HomeSection = ({ data }) => {
	const [homeSectionData, setHomeSectionData] = useState(data);
	return (
		<section className={classes.homeSection}>
			<div className={classes.left}>
				<h1>{homeSectionData?.title}</h1>
				<p>{homeSectionData?.subTitle}</p>
				<div className={classes.leftBottom}>
					<Button>
						{homeSectionData?.buttonText}
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
