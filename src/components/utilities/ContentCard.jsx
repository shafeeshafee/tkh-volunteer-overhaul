import React from "react";

const ContentCard = ({ image, title, text }) => {
	return (
		<div>
			<div className="card bg-gray-100 text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
				<div className="img">
					<img className="w-full h-full" src={image} alt={title} />
				</div>
				<div className="text p-5 pt-2 text-center h-full lg:h-56">
					<div className="title font-semibold my-2 text-2xl font-headings text-tkhpurple">{title}</div>
					<div className="desc text-lg text-justify">{text}</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
