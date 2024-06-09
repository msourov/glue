import axios from "axios";

export default (token = false) => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      "content-type": "application/json",
      authorization: token ? `Bearer ${token}` : "",
    },
  });
};
