import { Menu, Button, rem } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import useAuth from "../../services/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "../../services/hooks/useLocalStorage";

interface LSData {
  uid: string;
}

const Topbar = () => {
  return (
    <div className="bg-white text-black py-2 px-6 flex justify-between items-center border-b-2">
      <div>
        <img src="/static/glue.png" alt="logo" width={100} />
      </div>
      <div className="flex gap-4 mr-8">
        {/* <button>
          <IconSettings color="black" stroke={1} />
        </button> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;

function UserButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [LSData] = useLocalStorage<string | Record<string, unknown>>(
    "loggedInUser",
    null
  );
  const [imageUrl, setImageUrl] = useState("");
  const { uid } = LSData as unknown as LSData;
  const [timestamp, setTimestamp] = useState<number>(Date.now());
  useEffect(() => {
    const getImage = async () => {
      setTimestamp(Date.now());
      setImageUrl(
        `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${timestamp}`
      );
    };
    getImage();
  }, [timestamp]);

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <Button p={0} className="">
          <img
            src={imageUrl}
            alt="user"
            width={50}
            height={40}
            className="outline-black-5 overflow-hidden"
          />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}
          onClick={() => navigate("/user-profile")}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>

        {/* <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item> */}

        <Menu.Divider />
        <Menu.Item
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={logout}
          className="text-gray-600"
        >
          Logout
        </Menu.Item>

        {/* <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item> */}
      </Menu.Dropdown>
    </Menu>
  );
}
