import React from "react";
import Navbar from "../components/Navbar";

import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Faq = () => {
	return (
		<div>
			<Navbar />
			<Fade>
				<div className="max-w-screen-xl mx-auto p-8 mb-10">
					<h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">FAQs</h2>

					<ul className="flex justify-center items-center gap-10 text-justify flex-wrap h-full">
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">Who can volunteer for TKH?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										TKH Volunteer team members all have diverse backgrounds from various industries. We have volunteer members who hold tech
										facing roles and non-tech facing roles. Members of our volunteer team hold a variety of roles. Team members range from
										college students to CEO’s. You’ll have a better understanding of the volunteer from viewing their profile.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">How do I request volunteer help?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										Start by checking out the profile for our volunteer members. There you can get to know them a little better, view their
										personal websites, and schedule time to meet with them. Each volunteer will have a link to their calendar where you can
										see when they are available.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">How do I do about rescheduling with a volunteer?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										It is bound to happen that an unexpected emergency arises. If that does happen, we urge to contact the volunteer you've
										scheduled time with and let them know of the changes immediately.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">Does my location matter?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										For some volunteer engagements, physical presence is needed. For other engagements, a digital presence can be
										accommodated and the location would not be an issue. When scheduling time with volunteers, please be mindful of the time
										zone difference.
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">
									Who do I contact if I have questions regarding the Volunteer Program
								</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										If you have any questions, concerns, or feedback please contact <strong>Derrick Stroman</strong> at{" "}
										<strong>dstroman@theknowledgehouse.org</strong>
									</p>
								</p>
							</li>
						</Pulse>
						<Pulse>
							<li className="w-full xl:w-1/3 mx-3 xl:mx-10">
								<p className="text-lg font-medium leading-6 text-gray-900">How do I become a volunteer or mentor?</p>
								<p className="mt-2">
									<p className="text-base leading-6 text-gray-500">
										Sign up to be a{" "}
										<a
											className="text-tkhpurple font-bold"
											href="http://www.google.com/url?q=http%3A%2F%2Fwww.theknowledgehouse.org%2Fvolunteer%2F&sa=D&sntz=1&usg=AFQjCNFlAZDUQRROCJnI78RKAMg_ZDc7rA"
										>
											Volunteer
										</a>{" "}
										or{" "}
										<a
											className="text-tkhpurple font-bold"
											href="https://www.google.com/url?q=https%3A%2F%2Ftheknowledgehouse.typeform.com%2Fto%2FTxT8iD&sa=D&sntz=1&usg=AFQjCNFNrwzK-oy-k68iQwxce6ILNdWBLg"
										>
											Mentor
										</a>{" "}
										today!
									</p>
								</p>
							</li>
						</Pulse>
					</ul>
				</div>
			</Fade>
		</div>
	);
};

export default Faq;
