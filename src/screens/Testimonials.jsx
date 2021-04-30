import React from "react";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/utilities/TestimonialCard";

const Testimonials = () => {
	return (
		<div>
			<Navbar />
			<div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
				<div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
					<div className="w-full max-w-6xl mx-auto">
						<div className="text-center max-w-xl mx-auto">
							<h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
								What students <br />
								are saying.
							</h1>
							<h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
							<div className="text-center mb-10">
								<span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
								<span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
								<span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
								<span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
								<span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
							</div>
						</div>
						<div className="-mx-3 md:flex items-start">
							<div className="px-3 md:w-1/2">
								{/* 3 students */}
								<TestimonialCard
									name="Shafee Ahmed"
									course="Full Stack Web Development"
									quote="Throughout my journey, I've created several projects and won hackathons. Talking to mentors and volunteers helped me go from zero knowledge of the industry to getting my first job."
									avatar="https://i.imgur.com/UgYaFwM.png"
								/>
								<TestimonialCard
									name="Ayn Rand"
									course="Cybersecurity and Networking"
									quote="Walk on keyboard be superior or human is washing you why halp oh the horror flee scratch hiss bite yet cry louder at reflection poop in litter box, scratch the walls so meeeeouw. "
									avatar="https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80"
								/>
								<TestimonialCard
									name="Virginia Woolfe"
									course="Data Science"
									quote="Meowing non stop for food playing with balls of wool. Why dog in house?"
									avatar="https://images.unsplash.com/photo-1610669057941-53c6b567554a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=760&q=80"
								/>
							</div>
							<div className="px-3 md:w-1/2">
								<TestimonialCard
									name="Sylvia Plath"
									course="Usability Testing | UI UX"
									quote="I'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout cereal boxes make for five star accommodation."
									avatar="https://images.unsplash.com/photo-1605262451405-9330a2eaef49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80"
								/>
								<TestimonialCard
									name="Toni Morrison"
									course="Cybersecurity and Networking"
									quote=" Run off table persian cat jump eat fish cough furball into food bowl then scratch owner for a new one. "
									avatar="https://images.unsplash.com/photo-1605471395053-29a60b996ab4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80"
								/>
								<TestimonialCard
									name="Harper Lee"
									course="Full Stack Web Development"
									quote="Shove bum in owner's face like camera lens wake up wander around the house making large amounts of noise jump on top of your human's bed."
									avatar="https://images.unsplash.com/photo-1570731102433-34470efb6acf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
								/>
								{/* 3 students */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
