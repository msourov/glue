import { Navigate } from "react-router-dom";
import { FC, ReactElement, useEffect, useState } from "react";
import useAuth from "./useAuth";

interface childrenType {
  children: ReactElement;
}
export const ProtectedRoute: FC<childrenType> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return isLoggedIn ? children : null;
};

// export const ProtectedRoute: FC<childrenType> = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
