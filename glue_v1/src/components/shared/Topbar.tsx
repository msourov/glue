import {
  IconBell,
  IconLogout,
  IconMessage,
  IconSettings,
} from "@tabler/icons-react";
import useAuth from "../../services/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Button, useMantineColorScheme } from "@mantine/core";

const Topbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();

  return (
    <div
      className={`${
        colorScheme === "light" ? "bg-white" : "bg-gray-500"
      } text-black py-1 px-6 flex justify-between items-center border-b-1`}
    >
      <div>
        <img src="/static/glue.png" alt="logo" width={100} />
      </div>
      <div className="flex gap-4 mr-8">
        <Button
          variant="outline"
          size="compact-sm"
          color={`${colorScheme === "light" ? "blue" : "white"}`}
        >
          Content drive
        </Button>
        <button>
          <IconBell color="black" stroke={1} />
        </button>
        <button>
          <IconMessage color="black" stroke={1} />
        </button>
        <button onClick={() => navigate("/settings")}>
          <IconSettings color="black" stroke={1} />
        </button>
        <button onClick={logout}>
          <IconLogout color="black" stroke={1} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
