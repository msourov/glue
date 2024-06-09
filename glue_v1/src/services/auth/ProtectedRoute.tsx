import { Navigate } from "react-router-dom";
import { FC, ReactElement } from "react";
import useAuth from "./useAuth";

interface childrenType {
  children: ReactElement;
}
export const ProtectedRoute: FC<childrenType> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
