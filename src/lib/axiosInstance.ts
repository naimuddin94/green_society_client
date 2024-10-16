/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: "https://green-society-backend.vercel.app/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      if (config.headers) {
        config.headers["cookie"] = `accessToken=${accessToken}`;
      } else {
        (config as any).headers = {
          cookie: `accessToken=${accessToken}`,
        };
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(function (response) {
  return response;
});

export default axiosInstance;
