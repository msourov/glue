import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

// export const ProtectedRoute: FC<childrenType> = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
