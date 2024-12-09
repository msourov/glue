import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/shared/sidebar/Sidebar";
import Topbar from "./components/shared/Topbar";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden max-w-[100%]">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="max-h-full w-[240px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="content h-full overflow-y-auto overflow-x-hidden bg-gray-200 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
