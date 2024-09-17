import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";
import api from "../api";
import { getToken } from "../utils/getToken";
import useLocalStorage from "../hooks/useLocalStorage";
import { isAxiosError } from "axios";

interface AuthContextType {
  user: unknown;
  isLoggedIn: boolean;
  login: (data: { email: string; password: string }) => Promise<boolean>;
  sendVerMail: (data: {
    name: string;
    email: string;
  }) => Promise<SendVerMailResponse | false>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<boolean | undefined>;
  logout: () => void;
}

interface SendVerMailResponse {
  message: string;
  status_code: number;
  success: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setLSData, clearLSData] = useLocalStorage<
    string | Record<string, unknown>
  >("loggedInUser", null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (data: { email: string; password: string }) => {
    try {
      const res = await api().post("/margaret/v1/user/signin", data);
      setUser(res.data);
      setLSData(res.data);
      Cookies.set("token", res.data.access_token, { expires: 7 });
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    clearLSData();
    setIsLoggedIn(false);
    Cookies.remove("token");
  };

  const sendVerMail = async ({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) => {
    try {
      const res = await api().post("/margaret/v1/user/send/link", {
        name,
        email,
      });
      console.log("sendVerMail", res);
      if (res.data.success) {
        return res.data;
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data?.message);
      }
      return false;
    }
  };

  const signup = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const obj = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await api().post("/margaret/v1/user/signup", obj);
      if (res.status === 201) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn,
      login,
      sendVerMail,
      signup,
      logout,
    }),
    [user, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
