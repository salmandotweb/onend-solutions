import React, { useState } from "react";
import Button from "../../components/global/Button";
import { BsArrowRight } from "react-icons/bs";
import classes from "./WhoWeAreSection.module.css";

const WhoWeAreSection = ({ data }) => {
	const [whoWeAreSectionData, setWhoWeAreSectionData] = useState(data);

	return (
		<section className={classes.whoWeAreSection}>
			<p>{whoWeAreSectionData?.title}</p>
			<h3>{whoWeAreSectionData?.content}</h3>
			<Button styles={classes.getConsultationBtn}>
				{whoWeAreSectionData?.buttonText}
				<BsArrowRight />
			</Button>
		</section>
	);
};

export default WhoWeAreSection;
