import Cookies from "js-cookie";

export const getToken = () => {
  const token = Cookies.get("token");
  return token;
};

export const setToken = (token: string) => {
  Cookies.set("token", token, { expires: 7 });
};

export const removeToken = () => {
  Cookies.remove("token");
};
