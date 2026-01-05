import axios from "axios";
import { ENV } from "./env.config";

const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true, // cookies / auth
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor (Token, logs, etc.)
apiClient.interceptors.request.use(
  (config) => {
    // later: add token here
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (Global error handling)
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
