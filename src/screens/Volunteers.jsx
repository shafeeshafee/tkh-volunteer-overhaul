import Navbar from "../components/Navbar";

const Volunteers = () => {
	return (
		<div>
			<Navbar />
			<h1>Search for a volunteer</h1>
			<button id="technicalVolunteerInfoRetrievalBtn">Technical</button>
			<button id="careerVolunteerInfoRetrievalBtn">Career</button>
			<input type="text"></input>
		</div>
	);
};

export default Volunteers;
