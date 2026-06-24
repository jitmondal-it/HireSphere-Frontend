import axios, { InternalAxiosRequestConfig } from "axios";
import { navigateToLogin } from "../Services/AuthService";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let interceptorAdded = false;

export const setUpResponseInterceptor = (navigate: any) => {
  if (interceptorAdded) return;

  interceptorAdded = true;

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        navigateToLogin(navigate);
        
      }

      return Promise.reject(error);
    }
  );
};

export default axiosInstance;