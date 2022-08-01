import React, { Dispatch, SetStateAction } from "react";
import classnames from "classnames";
import { IconUserAdd } from "./icons";
import User from "./user";
import TechStack from "../techstack";
import { MUser, User as Usertypes } from "../../api/types";
import UserAdd from "./form/add";
import UserUpdate from "./form/edit";

type Props = {
  data: MUser | undefined;
  isLoading: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitRegistration: (e: React.FormEvent) => Promise<void>;
  handleSubmitUpdate: (e: React.FormEvent) => Promise<void>;
  dataInput: {
    fullName: string;
    mobileNumber: string;
  };
  isOpenUpdate: boolean;
  handleOpenUpdate: (user: Usertypes) => void;
  handleCloseUpdate: () => void;
};

const Users = ({
  data,
  isLoading,
  isOpen,
  setIsOpen,
  handleChange,
  handleSubmitRegistration,
  handleSubmitUpdate,
  dataInput,
  isOpenUpdate,
  handleOpenUpdate,
  handleCloseUpdate,
}: Props) => {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center items-center mb-5">
          <h2 className="flex-1 text-xl font-bold tracking-widest text-gray-500 lg:text-2xl">
            Users
          </h2>
          <UserAdd
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleChange={handleChange}
            handleSubmitRegistration={handleSubmitRegistration}
            dataInput={dataInput}
          />
          <UserUpdate
            isOpenUpdate={isOpenUpdate}
            handleChange={handleChange}
            handleCloseUpdate={handleCloseUpdate}
            dataInput={dataInput}
            handleSubmitUpdate={handleSubmitUpdate}
          />
          <button
            className={classnames(
              "flex justify-center items-center py-2 w-12 bg-violet-900 hover:bg-violet-900 text-white",
              "text-white font-medium text-xs leading-tight uppercase rounded",
              "shadow-md hover:shadow-lg",
              "focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800",
              "active:shadow-lg transition duration-150 ease-in-out",
              "md:w-[180px] md:py-2"
            )}
            onClick={() => setIsOpen(true)}
          >
            <IconUserAdd size="w-6 h-6" />
            <p className="hidden lg:block lg:text-base lg:font-normal lg:ml-2">
              Add User
            </p>
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {isLoading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            data?.data.map((user) => (
              <React.Fragment key={user._id}>
                <User user={user} handleOpenUpdate={handleOpenUpdate} />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
