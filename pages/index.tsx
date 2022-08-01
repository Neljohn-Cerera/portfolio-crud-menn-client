import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Users from "../src/components/users";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getUsers } from "../src/api/get";
import { postUser } from "../src/api/post";
import TechStack from "../src/components/techstack";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["users"], () => getUsers(""));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [dataInput, setDataInput] = useState({
    fullName: "",
    mobileNumber: "",
  });
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data, isLoading } = useQuery(["users"], () => getUsers(""));
  const {
    mutateAsync: asyncRegisterUser,
    isLoading: registerLoading,
    isError: registerError,
  } = useMutation(postUser);

  /**
   * Employee Registration
   */
  const handleSubmitRegistration = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    await asyncRegisterUser(
      {
        fullName: dataInput.fullName,
        mobileNumber: dataInput.mobileNumber,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["users"]);
          setDataInput({
            fullName: "",
            mobileNumber: "",
          });
          /** closing alert after 5 seconds */
          setTimeout(() => {
            setIsOpen(false);
          }, 8000);
        },
        onError: (err: any, newTodo, context) => {
          /** closing alert after 5 seconds */
          setTimeout(() => {
            setIsOpen(false);
          }, 8000);
        },
      }
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Head>
        <title>MENN CRUD</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next Js Crud App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:col-span-2 col-span-3 h-full w-full">
        <Users
          data={data}
          isLoading={isLoading}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChange={handleChange}
          handleSubmitRegistration={handleSubmitRegistration}
          dataInput={dataInput}
        />
      </div>
      <div className="md:col-span-1 col-span-3 h-full w-full bg-white rounded shalow-lg flex- flex-col md:p-10 p-5">
        <TechStack />
      </div>
    </>
  );
};

export default Home;
