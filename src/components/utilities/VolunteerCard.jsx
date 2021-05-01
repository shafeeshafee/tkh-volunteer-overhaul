import React from "react";
import { useState } from "react";
import { ZoomInIcon } from "@heroicons/react/outline";
import ProfileModal from "./ProfileModal";

const VolunteerCard = ({ role, name, employer, languages, volunteer }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="m-4">
			<div class="max-w-sm relative bg-white shadow-lg rounded-lg overflow-hidden my-4">
				<img
					class="w-full h-56 object-cover object-center"
					src={
						volunteer?.image_link.default ??
						"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
					}
					alt="avatar"
				/>
				<button className="absolute top-1 right-1 text-white focus:outline-none" onClick={() => setIsOpen(true)}>
					<ZoomInIcon className="w-8 h-8" />
				</button>
				<div class="flex items-center px-6 py-3 bg-gray-900">
					<h1 class="mx-3 text-white font-semibold text-lg">{volunteer?.position ?? role}</h1>
				</div>
				<div class="py-4 px-6">
					<div class="py-4 px-6">
						<h1 class="text-2xl font-semibold text-gray-800">{volunteer?.name ?? name}</h1>
						<div class="flex items-center mt-4 text-gray-700">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
								<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
							</svg>
							<h1 class="px-2 text-sm">{volunteer?.company ?? employer}</h1>
						</div>
						<div class="flex items-center mt-4 text-gray-700">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
							<h1 class="px-2 text-sm">
								<ul className="flex flex-wrap">
									{(volunteer?.proficiencies ?? languages).map((item) => (
										<li className="mx-3">{item}</li>
									))}
								</ul>
							</h1>
						</div>
					</div>
				</div>
			</div>
			{volunteer && <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} volunteer={volunteer} />}
		</div>
	);
};

export default VolunteerCard;
