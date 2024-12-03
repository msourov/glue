import axios from "axios";
import { getToken } from "../utils/getToken";

const api = () => {
  const token = getToken();

  const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      "content-type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  apiClient.interceptors.request.use(
    (config) => {
      const authToken = getToken();
      if (authToken) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return apiClient;
};

export default api;
