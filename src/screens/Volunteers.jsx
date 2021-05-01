import { useState } from "react";

import Navbar from "../components/Navbar";
import VolunteerCard from "../components/utilities/VolunteerCard";
import volunteersData from "../volunteers.js";

const Volunteers = () => {
	const [volunteers, setVolunteers] = useState(volunteersData);

	function updateAvailableVolunteers(isSkillProvided) {
		const volunteerSearchCriteria = document.getElementById("volunterSearchCriteria");
		const searchTerms = volunteerSearchCriteria.value.split();
		console.log("Current search criteria: " + searchTerms);

		let volunteersListElement = document.getElementById("relevantVoluteersLst");
		let volunteersList = volunteersListElement.childNodes;

		for (let volunteerInfo of volunteersList) {
			const volunteerInfoBank = volunteerInfo.innerText.toLowerCase();
			console.log("volunteersInfoBank: " + volunteerInfoBank);

			let currentVolunteerIsRelevant = false;
			for (const searchTerm of searchTerms) {
				if (volunteerInfoBank.includes(searchTerm.toLowerCase())) {
					currentVolunteerIsRelevant = true;
				}
			}

			const selectedSkill = document.getElementById("skillSelect").value;
			console.log("Selected Skill: " + selectedSkill);
			if (currentVolunteerIsRelevant && volunteerInfoBank.includes(selectedSkill)) {
				console.log("Making this volunteer visible as they are relevant");
				volunteerInfo.style.display = "block";
			} else {
				console.log("Hiding this volunteer as they are not relevant");
				volunteerInfo.style.display = "none";
			}
		}
	}

	return (
		<div>
			<Navbar />

			<h1 className="text-5xl font-headings pt-24 font-bold text-tkhpurple">Our Volunteers</h1>
			{/* dropdown */}
			<div className="relative inline-flex pt-10">
				<div className="flex justify-center items-center flex-wrap">
					<select
						id="skillSelect"
						defaultValue=""
						onChange={updateAvailableVolunteers}
						className="border font-headings text-lg border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
					>
						<option value="" selected="selected" disabled hidden>
							Select skills of interest
						</option>
						<option value="JavaScript">JavaScript</option>
						<option value="c++">C++</option>
						<option value="python">Python</option>
						<option value="sql">SQL</option>
						<option value="lua">Lua</option>
						<option value="technical interviews">Technical Interview Prep</option>
						<option value="behaviorial interviews">Behavioral Interview Prep</option>
					</select>

					<br />
					{/* Search component goes below */}
					<div className="flex justify-center items-center font-headings">
						<p className="mx-0 lg:ml-12 lg:mr-2">Search:</p>
						<input
							className="border shadow-lg h-10 w-56 text-center my-10"
							id="volunterSearchCriteria"
							onChange={updateAvailableVolunteers}
							type="search"
							placeholder="Search e.g., JavaScript"
						/>
					</div>
				</div>
			</div>
			{/* List of volunteers below */}
			<ul className="flex justify-center flex-wrap" id="relevantVoluteersLst">
				{volunteers.technical.map((vol) => {
					return <VolunteerCard volunteer={vol} />;
				})}
			</ul>
		</div>
	);
};

export default Volunteers;
