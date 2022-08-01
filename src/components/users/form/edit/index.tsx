/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpenUpdate: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitUpdate: (e: React.FormEvent) => Promise<void>;
  dataInput: {
    fullName: string;
    mobileNumber: string;
  };
  handleCloseUpdate: () => void;
};

const UserUpdate = ({
  isOpenUpdate,
  handleChange,
  handleSubmitUpdate,
  dataInput,
  handleCloseUpdate
}: Props) => {
  return (
    <Transition show={isOpenUpdate} as={Fragment}>
      <Dialog
        open={isOpenUpdate}
        onClose={handleCloseUpdate}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        {/* Use one Transition.Child to apply one transition to the backdrop... */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* The actual dialog panel  */}
            <Dialog.Panel className="flex flex-col w-full md:w-5/12 md:px-10 px-5 py-10 rounded bg-white">
              <Dialog.Title
                as="h2"
                className="text-gray-900 text-xl md:text-2xl font-semibold text-center mb-4"
              >
                Update User
              </Dialog.Title>
              {/* <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description> */}
              <form onSubmit={handleSubmitUpdate}>
                <label className="block">
                  <span className="text-gray-700 md:text-xl">Fullname</span>
                  <input
                    name="fullName"
                    type="text"
                    className="form-input mb-2 mt-2 block w-full rounded-md"
                    placeholder="ex. Neljohn R Cerera"
                    onChange={handleChange}
                    value={dataInput.fullName}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700 md:text-xl">Mobile #</span>
                  <input
                    name="mobileNumber"
                    type="text"
                    className="form-input mb-2 mt-2 block w-full rounded-md"
                    placeholder="ex. 09000000000"
                    onChange={handleChange}
                    value={dataInput.mobileNumber}
                  />
                </label>

                <div className="mt-8 flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 md:py-3 text-center rounded-md"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-red-500 text-white py-2 md:py-3 text-center rounded-md"
                    onClick={handleCloseUpdate}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserUpdate;