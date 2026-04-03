import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // cookie auth only
  timeout: 60000,
});