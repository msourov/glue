import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../utils/getToken";

const PublicRoute = () => {
  const token = getToken();
  const location = useLocation();
  console.log(location.state?.from);
  // Redirect authenticated users away from the login page
  if (token) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
