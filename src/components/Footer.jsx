import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="font-headings">
			<div className="w-full min-h-1/2 flex items-center justify-center bg-tkhpurple">
				<div className="md:w-2/3 w-full px-4 text-white flex flex-col">
					<div className="w-full text-7xl font-bold">
						<h1 className="w-full md:w-2/3 pt-10">Get involved</h1>
					</div>
					<div className="flex mt-8 flex-col md:flex-row md:justify-between">
						<p className="w-full md:w-2/3 text-gray-400">
							Want to become a volunteer? Or mentor? Visit our{" "}
							<Link className="text-tkhyellow" to="/faq">
								FAQ
							</Link>{" "}
							to see how you can get started.
						</p>
						<div className="w-44 pt-6 md:pt-0">
							<a className="bg-tkhyellow text-tkhpurple justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
								Contact
							</a>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex mt-24 mb-12 flex-row justify-between">
							<div className="">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path>
								</svg>
							</div>
							<a
								href="https://www.theknowledgehouse.org/about/"
								className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
							>
								About
							</a>
							<a
								href="https://www.theknowledgehouse.org/"
								className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
							>
								TKH Homepage
							</a>
							<a
								href="mailto:derrickstroman@theknowledgehouse.org"
								className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
							>
								Contact
							</a>
							<div className="flex flex-row items-center justify-between">
								<ul className="flex flex-row items-center justify-between">
									<li className="mx-3">
										<a href="https://www.facebook.com/theknowledgehouse">
											<img
												className="w-8 h-8"
												src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
												alt=""
											/>
										</a>
									</li>
									<li className="mx-3">
										<a href="https://www.linkedin.com/school/theknowledgehouse/">
											<img
												className="w-8 h-8"
												src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png"
												alt=""
											/>
										</a>
									</li>
									<li className="mx-3">
										<a href="https://www.instagram.com/theknowledgehouse/">
											<img
												className="w-8 h-8"
												src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png"
												alt=""
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<hr className="border-gray-600" />
						<p className="w-full text-center my-12 text-gray-600">Copyright © The Knowledge House 2021</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
