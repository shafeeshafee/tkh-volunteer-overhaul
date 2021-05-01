import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const ProfileModal = ({isOpen, setIsOpen, name, employer, languages}) => {
    return (
        <Transition
            show={isOpen}
            as={Fragment}>
            <Dialog
                static
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
                    <div className="flex flex-col text-black w-2/4 py-8 px-4 text-center">
                        <Transition.Child
                        as={Fragment}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-100"
                            enterTo="opacity-100 scale-100"
                        >
                            <div className="flex z-20">
                                <div className="flex-1 relative bg-yellow-300">
                                    <button className="absolute left-0 bg-gray-900 text-white" onClick={() => setIsOpen(false)}>
                                        <XIcon className="w-4 h4-4"/>
                                    </button>
                                    <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                                    <h1>{employer}</h1>
                                    <img
                                        className="w-2/4 h-56 mx-auto object-center"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        alt="avatar"
                                    />
                                    <h1>Placeholder for social media</h1>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-gray-200">
                                        <p className="mx-2">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quasi sint provident autem beatae voluptatum optio asperiores
                                            ducimus ratione, repellendus quidem doloremque distinctio sequi et mollitia delectus consequuntur, maiores nobis.
                                        </p>
                                    </div>
                                    <div className="flex flex-col bg-white">
                                        <div className="flex flex-wrap">
                                            {languages.map((item) => (
                                                <div className="m-3 bg-gray-400 flex-1" key={item}>
                                                    <p className="m-2">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex">
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
}

export default ProfileModal;
