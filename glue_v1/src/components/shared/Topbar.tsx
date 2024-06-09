import { Menu, Button, rem } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconLogout,
} from "@tabler/icons-react";
import useAuth from "../../services/auth/useAuth";

const Topbar = () => {
  return (
    <div className="bg-white text-black py-2 px-6 flex justify-between items-center border-b-2">
      <div>
        <img src="/static/glue.png" alt="logo" width={100} />
      </div>
      <div className="flex gap-4 mr-4">
        {/* <button>
          <IconSettings color="black" stroke={1} />
        </button> */}
        <Demo />
      </div>
    </div>
  );
};

export default Topbar;

function Demo() {
  const { logout } = useAuth();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button bg="none">
          <img src="/static/user.png" alt="user" width={30} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
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
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
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
