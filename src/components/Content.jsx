import React from "react";
import ContentCard from "./utilities/ContentCard";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Content = () => {
	return (
		<Fade>
			<div className="h-full">
				<div className="font-headings heading_section h-full bg-gray-200 font-semibold text-5xl text-center p-5 pt-24 text-gray-800">
					Be Part of a High Caliber Network
				</div>
				<div className="section cards mx-auto border grid md:grid-cols-3 pt-8 pb-20 font-bodyFont md:px-12 bg-gray-200 text-gray-800">
					<Bounce left>
						<ContentCard
							image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							title="Networking made easy"
							text="Through our volunteer options, networking was never made easier. With over fifty experts ranging from software engineers, data scientists, and career professionals - we got you covered."
						/>
					</Bounce>
					<Bounce left>
						<ContentCard
							image="https://images.unsplash.com/photo-1556711905-b3f402e1ff80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							title="Learn anything"
							text="Unsure about a homework or project? Want to know more about a technology used in the industry? The Knowledge House has
							volunteers from all walks of the tech sphere to answer your questions."
						/>
					</Bounce>
					<Bounce left>
						<ContentCard
							image="https://images.unsplash.com/photo-1573164574511-73c773193279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							title="Build a community"
							text="Through our volunteer options, networking was never made easier. Find someone you want to talk to, set up a schedule, build a
							relationship, and grow your network."
						/>
					</Bounce>
				</div>
			</div>
		</Fade>
	);
};

export default Content;
