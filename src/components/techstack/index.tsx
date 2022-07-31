import React from "react";

const TechStack = () => {
  return (
    <div className="mt-5 p-5 bg-green-200 shadow-lg rounded-lg lg:mt-0 lg:w-1/4 lg:max-h-[400px]">
      <h3 className="text-xl text-center mb-5 font-normal text-green-900 lg:text-2xl">
        Technology Used
      </h3>

      <div className="flex w-full">
        <div className="flex-1">
          <ul className="list-disc ml-5">
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Next Js
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Tailwind CSS
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Express
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Mongodb
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Node Js
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="list-disc ml-5">
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Axios
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Formik
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              React Query
            </li>
            <li className="text-base font-normal text-green-900 lg:text-lg">
              Mongoose
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl text-start mt-5 font-bold text-green-900 lg:text-4xl lg:mt-10">
        Mobile Friendly App
      </h3>
    </div>
  );
};

export default TechStack;
