import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar";
import data from "../volunteers";


function findOneWithId(id) {
    return [
        ...data.career,
        ...data.technical
    ].find(volunteer => id === volunteer.id);
}


const Volunteer = () => {
	const [volunteer, setVolunteer ] = useState(undefined);
    const { id } = useParams();

    useEffect(() => setVolunteer(findOneWithId(id)), [id])

    if (!volunteer) {
        return (<></>);
    }

	return (
		<div className="flex flex-col">
			<Navbar />
			<h1 className="text-5xl">{volunteer.name}</h1>
			<hr />
			<div className="flex items-center bg-yellow-300">
				<img
					className="w-56 h-56 "
					src={volunteer.image_link.default}
					alt="volunteer avatar"
				/>
			</div>
			<div class="flex items-center px-6 py-3">
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
					<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
				</svg>
				<h1 class="mx-3 text-center font-semibold text-lg">{volunteer.position} - {volunteer.company}</h1>
			</div>
					
            <div className="content-center">
                <h2>About Me</h2>
                <div>{volunteer.about}</div>
            </div>
            <div className="content-center">
                <h2>Skillset</h2>
                <div>
					<ul className="flex">
                    {volunteer.proficiencies.map((item) => (
                        <li className="mx-3">{item}</li>
                    ))}
                	</ul>
				</div>
            </div>
		</div>
	);
};


export default Volunteer
