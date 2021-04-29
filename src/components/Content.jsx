import React from "react";

const Content = () => {
	return (
		<div>
			<div className="heading_section italic bg-gray-200 font-semibold text-3xl text-center p-5 pt-24 text-gray-800">
				Join a High Caliber Mentoring Network
			</div>

			<div className="section cards mx-auto border grid md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
				<div className="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
					<div className="img">
						<img
							className="w-full h-full"
							src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							alt=""
						/>
					</div>
					<div className="text p-5 pt-2 text-center">
						<div className="title font-semibold my-2 text-xl text-red-700">Networking made easy</div>
						<div className="desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit modi quo non cumque! Maiores, ipsam blanditiis quod eaque
							necessitatibus corrupti, minima quaerat, possimus sunt distinctio laboriosam a nemo dolore fugiat.
						</div>
					</div>
				</div>

				<div className="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
					<div className="img">
						<img
							className="w-full h-full"
							src="https://images.unsplash.com/photo-1556711905-b3f402e1ff80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							alt=""
						/>
					</div>
					<div className="text p-5 pt-2 text-center">
						<div className="title font-semibold my-2 text-xl text-red-700">Learn anything</div>
						<div className="desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit modi quo non cumque! Maiores, ipsam blanditiis quod eaque
							necessitatibus corrupti, minima quaerat, possimus sunt distinctio laboriosam a nemo dolore fugiat.
						</div>
					</div>
				</div>

				<div className="card text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded">
					<div className="img">
						<img
							className="w-full h-full"
							src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							alt=""
						/>
					</div>
					<div className="text p-5 pt-2 text-center">
						<div className="title font-semibold my-2 text-xl text-red-700">Build a community</div>
						<div className="desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit modi quo non cumque! Maiores, ipsam blanditiis quod eaque
							necessitatibus corrupti, minima quaerat, possimus sunt distinctio laboriosam a nemo dolore fugiat.
						</div>
					</div>
				</div>
			</div>

			<div className="section py-28 w-full scree border grid md:grid-cols-2 bg-gray-200 text-gray-800">
				<div className="subsec flex-none overflow-hidden max-h-96">
					<img
						className="w-full"
						src="https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
					/>
				</div>
				<div className="subsec my-auto p-8">
					<div className="title font-semibold text-3xl mb-5">Not sure how to start?</div>
					<div className="desc text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem officiis voluptatem, laborum officia magni ex cumque
						maiores, doloribus perspiciatis nihil voluptates ipsam doloremque rem vitae nulla neque delectus distinctio voluptate. Lorem
					</div>
				</div>
			</div>

			<div className="filling pt-14"></div>
		</div>
	);
};

export default Content;
