import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.HOST_SERVER,
});
