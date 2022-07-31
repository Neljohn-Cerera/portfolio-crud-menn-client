import { api } from "./axios";
import { IRUser, User } from "./types";
import { customAlphabet } from "nanoid";

/**
 *  Register user
 *
 * @returns data? : User
 */
export const postUser = async (userinput: IRUser): Promise<User> => {
  const nanoid = customAlphabet("abcdefghidjklmnopqrst", 6);
  const response = await api.post<User>(
    "user",
    {
      ...userinput,
      gender: "Female",
      birthDate: "2000-08-21",
      address: "Toril Davao City",
      accessLevel: "Level 3",
      email: `${nanoid()}@gmail.com`,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
