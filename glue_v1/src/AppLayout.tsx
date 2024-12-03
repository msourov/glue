import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/shared/sidebar/Sidebar";
import Topbar from "./components/shared/Topbar";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/8 h-full border-r-2 overflow-hidden">
          <Sidebar />
        </div>

        <div className="flex-1">
          <div className="content h-full overflow-auto bg-gray-200">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
