import { useState } from "react";

import Navbar from "../components/Navbar";
import VolunteerCard from "../components/utilities/VolunteerCard";
import volunteersData from "../volunteers.js";

const Volunteers = () => {
	const [volunteers, setVolunteers] = useState([]);

	function updateAvailableVolunteers() {
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

			if (currentVolunteerIsRelevant) {
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

			<div className="h-full py-20">
				<h1 className="text-5xl font-headings">TKH Volunteers</h1>
				<hr />
				{/* dropdown */}
				<div className="relative inline-flex">
					<svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
						<path
							d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
							fill="#648299"
							fill-rule="nonzero"
						/>
					</svg>
					<select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
						<option>Choose a color</option>
						<option>Red</option>
						<option>Blue</option>
						<option>Yellow</option>
						<option>Black</option>
						<option>Orange</option>
						<option>Purple</option>
						<option>Gray</option>
						<option>White</option>
					</select>
				</div>
				<br />
				{/* Search component goes below */}
				<input id="volunterSearchCriteria" onChange={updateAvailableVolunteers} type="search" placeholder="Search e.g., JavaScript" />

				{/* List of volunteers below */}
				<ul className="flex justify-evenly flex-wrap" id="relevantVoluteersLst">
					<VolunteerCard volunteer={volunteersData.technical[0]} />
					<VolunteerCard role="Data Scientist" name="Jason McData" employer="Abc-Xyz Inc." languages={["Python"]} />
					<VolunteerCard role="Data Scientist" name="Gregory Wint" employer="Abc-Xyz Inc." languages={["JavaScript"]} />
					<VolunteerCard role="Data Scientist" name="Stringer Bell" employer="Abc-Xyz Inc." languages={["Lua"]} />
				</ul>
			</div>
		</div>
	);
};

export default Volunteers;
