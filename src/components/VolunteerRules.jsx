import React from "react";
import Tip from "./utilities/Tip";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const VolunteerRules = () => {
	return (
		<Fade>
			<div className="section py-28 w-full scree border grid md:grid-cols-2 text-gray-800">
				<div className="subsec flex-none overflow-hidden max-h-full">
					<img
						className="w-full h-11/12"
						src="https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="laptop girl"
					/>
				</div>

				<div className="subsec my-auto p-8">
					<div className="title font-semibold text-4xl mb-5 font-headings">Etiquette with volunteers</div>
					<div className="desc text-lg">
						<Bounce top>
							<ul className="flex flex-wrap justify-center font-bodyFont">
								<Tip text="Schedule a meeting at least 48 hours before a given date" />
								<Tip text="Check your mic and video settings before a meeting" />
								<Tip text="Having your webcam on encourages more rapport" />
								<Tip text="Introduce yourself when meeting new volunteers" />
								<Tip text="Bring questions to ask your tutor" />
								<Tip text="You have the option to record a meeting with consent" />
							</ul>
						</Bounce>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default VolunteerRules;
