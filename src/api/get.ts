import { api } from "./axios";
import { MUser } from "./types";

/**
 *  GET USERS
 *
 * @returns data:MUser
 */
export const getUsers = async (text: string): Promise<MUser> => {
  const response = await api.get<MUser>("user/search", {
    params: {
      text,
      level: "Level 3",
    },
    withCredentials: true,
  });
  return response.data;
};
