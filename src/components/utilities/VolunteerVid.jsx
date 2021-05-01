import React from "react";
import ReactPlayer from "react-player";

const VolunteerVid = () => {
	return (
		<div className="player-wrapper pb-20 flex justify-center">
			<ReactPlayer className="react-player" url="https://youtu.be/96ZxN7wEOlo" width="80%" height="55vh" />
		</div>
	);
};

export default VolunteerVid;
