import React from "react";
import Image from "next/image";
import pic from "../../../asset/pic.jpg";
import classnames from "classnames";
import { IconEdit, IconView } from "../icons";
import { User } from "../../../api/types";

type Props = {
  user: User;
};

const User = ({ user }: Props) => {
  return (
    <div
      className="bg-white flex items-center py-2 px-2 
    border-[1px] border-blue-300 rounded-lg shadow-lg"
    >
      <div className="flex items-center w-[50px]">
        <Image
          className="rounded-full"
          src={pic}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <div className="flex-1 ml-3">
        <h4 className="text-base font-normal">{user.fullName}</h4>
        <p className="text-sm font-normal opacity-50">{user.account.mobileNumber}</p>
      </div>
      <div className="w-20 h-8 flex items-center space-x-2">
        <button
          className={classnames(
            "w-full h-full bg-gray-500 hover:bg-gray-900 text-white",
            "text-white font-medium text-xs leading-tight uppercase rounded",
            "shadow-md hover:shadow-lg",
            "focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
            "active:shadow-lg transition duration-150 ease-in-out"
          )}
        >
          <IconView size="h-5 w-5 mx-auto" />
        </button>
        <button
          className={classnames(
            "w-full h-full bg-blue-500 hover:bg-blue-900 text-white",
            "text-white font-medium text-xs leading-tight uppercase rounded",
            "shadow-md hover:shadow-lg",
            "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
            "active:shadow-lg transition duration-150 ease-in-out"
          )}
        >
          <IconEdit size="h-5 w-5 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default User;
