import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const ProfileModal = ({ isOpen, setIsOpen, volunteer }) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog
				static
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto font-headings"
			>
				<div className="flex flex-wrap text-black lg:w-2/4 py-8 px-4 text-center h-full md:h-auto w-screen">
					<Transition.Child as={Fragment} enter="transition-opacity duration-500" enterFrom="opacity-0">
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
					</Transition.Child>
					<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-100" enterTo="opacity-100 scale-100">
						<div className="flex flex-col lg:flex-row flex-wrap z-20">
							<div className="flex-1 relative bg-yellow-300">
								<button className="absolute left-0 bg-gray-900 text-white" onClick={() => setIsOpen(false)}>
									<XIcon className="w-8 h-8" />
								</button>
								<h1 className="text-2xl font-semibold text-gray-800 pt-5">{volunteer.name}</h1>
								<h1 className="italic py-1 font-bodyFont">{volunteer.company}</h1>
								<img className="flex w-full lg:w-2/4 h-56 mx-auto object-center" src={volunteer.image_link.default} alt="avatar" />
								<div className="flex py-5">
									{/* Not sure yet how we want to handle this, but for now this displays just the websites with non-empty links */}
									{Object.keys(volunteer.websites)
										.reduce((acc, current) => {
											if (volunteer.websites[current]) {
												acc.push(current);
											}
											return acc;
										}, [])
										.map((website) => (
											<a className="mx-auto flex flex-wrap" href={volunteer.websites[website]}>
												{website === "linkedin" ? (
													<img src="https://www.svgrepo.com/show/144550/linkedin.svg" className="w-8 h-auto" alt="" />
												) : website === "github" ? (
													<img src="https://www.svgrepo.com/show/305241/github.svg" className="w-8 h-auto" alt="" />
												) : website === "personal_website" ? (
													<img src="https://www.svgrepo.com/show/104921/person-shape.svg" className="w-8 h-auto" alt="" />
												) : website === "company_website" ? (
													<img src="https://www.svgrepo.com/show/35410/briefcase.svg" className="w-8 h-auto" alt="" />
												) : (
													<img src="https://www.svgrepo.com/show/152916/world.svg" />
												)}
											</a>
										))}
								</div>
							</div>
							<div className="flex-1">
								<div className="bg-gray-200">
									<p className="mx-2 text-justify py-5">{volunteer.about}</p>
								</div>
								<div className="flex flex-col bg-white">
									<div className="flex flex-wrap py-3 ">
										{volunteer.proficiencies.map((item) => (
											<div className="m-2 bg-gray-600 flex-1 flex items-center justify-center text-white" key={item}>
												<p className="m-2 text-center">{item}</p>
											</div>
										))}
									</div>
									<div className="flex py-4">
										<div className="rounded-lg bg-indigo-100 mx-auto p-2">5/3/21</div>
										<div className="rounded-lg bg-indigo-100 mx-auto p-2">5/6/21</div>
										<div className="rounded-lg bg-indigo-100 mx-auto p-2">5/10/21</div>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ProfileModal;
