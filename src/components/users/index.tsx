import React, { Dispatch, SetStateAction } from "react";
import classnames from "classnames";
import { IconUserAdd } from "./icons";
import User from "./user";
import TechStack from "../techstack";
import { MUser, User as Usertypes } from "../../api/types";
import UserAdd from "./form/add";

type Props = {
  data: MUser | undefined;
  isLoading: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitRegistration: (e: React.FormEvent) => Promise<void>;
  dataInput: {
    fullName: string;
    mobileNumber: string;
  };
};

const Users = ({
  data,
  isLoading,
  isOpen,
  setIsOpen,
  handleChange,
  handleSubmitRegistration,
  dataInput,
}: Props) => {
  return (
    <div className="w-full py-5 flex flex-col lg:flex-row lg:space-x-5 lg:px-2">
      <div className="flex-1 flex flex-col">
        <div className="flex pb-5">
          <h2 className="flex-1 text-xl font-medium text-green-800 lg:text-2xl">
            Users
          </h2>
          <UserAdd
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleChange={handleChange}
            handleSubmitRegistration={handleSubmitRegistration}
            dataInput={dataInput}
          />
          <button
            className={classnames(
              "flex justify-center items-center py-2 w-14 bg-green-900 hover:bg-blue-900 text-white",
              "text-white font-medium text-xs leading-tight uppercase rounded",
              "shadow-md hover:shadow-lg",
              "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
              "active:shadow-lg transition duration-150 ease-in-out",
              "lg:w-[180px] lg:py-4"
            )}
            onClick={() => setIsOpen(true)}
          >
            <IconUserAdd size="w-6 h-6" />
            <p className="hidden lg:block lg:text-base lg:font-normal lg:ml-2">
              Add User
            </p>
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          {isLoading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            data?.data.map((user) => (
              <React.Fragment key={user._id}>
                <User user={user} />
              </React.Fragment>
            ))
          )}
        </div>
      </div>

      <TechStack />
    </div>
  );
};

export default Users;
