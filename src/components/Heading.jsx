import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const Heading = () => {
	return (
		<div>
			<div className="hidden lg:block">
				<Navbar />
			</div>
			<Fade cascade>
				<div>
					<div className="relative bg-white overflow-hidden">
						<div className="max-w-7xl mx-auto">
							<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
								<svg
									className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
									fill="currentColor"
									viewBox="0 0 100 100"
									preserveAspectRatio="none"
									aria-hidden="true"
								>
									<polygon points="50,0 100,0 50,100 0,100" />
								</svg>
								<div className="block lg:hidden">
									<Navbar />
								</div>
								<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
									<div className="sm:text-center lg:text-left font-bodyFont ">
										<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-headings">
											<span className="block xl:inline">Volunteers are here to help you</span>{" "}
											<span className="block text-tkhyellow xl:inline">succeed</span>
										</h1>
										<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
											“I believe that anyone with the motivation to learn and continuously self-improve has the opportunity for a
											spectacular career and life via means that weren't possible for previous generations.”
										</p>
										<p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
											Matthew Newton - <span className="italic">Engineering Manager, Bloomberg</span>
										</p>
										<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
											<div className="rounded-md shadow-xl">
												<Jump>
													<Link
														to="/volunteers"
														className="font-headings w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tkhpurple hover:bg-tkhyellow hover:text-tkhpurple md:py-4 md:text-lg md:px-10 transition ease-in-out"
													>
														View Volunteers
													</Link>
												</Jump>
											</div>
											<div className="mt-3 sm:mt-0 sm:ml-3"></div>
										</div>
									</div>
								</main>
							</div>
						</div>
						<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<img
								className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
								src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Heading;
