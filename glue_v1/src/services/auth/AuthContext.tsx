import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import auth from ".";

interface AuthContextType {
  user: unknown;
  isLoggedIn: boolean;
  login: (data: { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const getCookie = (name: string): string | null => {
  console.log(name);
  const value = `; ${document.cookie}`;
  const parts: string[] = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (data: { email: string; password: string }) => {
    try {
      const res = await auth().post("/margaret/v1/user/signin", data);
      console.log(res.data);
      setUser(res.data);
      document.cookie = `authToken=${res.data.access_token}; path=/; secure: HttpOnly;`;
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    document.cookie = "authToken=; max-age=0; path=/";
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn,
      login,
      logout,
    }),
    [user, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
