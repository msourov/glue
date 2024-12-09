import { Box, Text } from "@mantine/core";
import { Menu, Button } from "@mantine/core";
// import useAuth from "../../services/auth/useAuth";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../services/hooks/useLocalStorage";
// import useLocalStorage from "../../services/hooks/useLocalStorage";

interface LSData {
  name: string;
  email: string;
  uid: string;
}

export function ProfileSection() {
  return (
    <Box className="profile-section fixed w-fit bg-white text-center py-4 z-10 flex items-center justify-center gap-2">
      <UserButton />
    </Box>
  );
}

function UserButton() {
  const navigate = useNavigate();
  const [LSData] = useLocalStorage<string | Record<string, unknown>>(
    "loggedInUser",
    null
  );
  // const uid = (LSData as unknown as LSData)?.uid || "";
  // const imageUrl = `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${Date.now()}`;
  const imageUrl = "https://avatar.iran.liara.run/public";

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <Button
          p={0}
          color="none"
          className="hover:bg-transparent hover:cursor-pointer"
          onClick={() => navigate("/user-profile")}
        >
          <div className="rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt="user"
              width={40}
              height={40}
              className="outline-black-5 overflow-hidden"
            />
          </div>
          <div
            style={{
              marginTop: "-1rem",
              color: "black",
              marginLeft: "1rem",
              textAlign: "left",
            }}
          >
            <Text mt="md" size="sm" className="font-semibold truncate w-32">
              {(LSData as unknown as LSData)?.name || "Anonymous"}
            </Text>
            <Text size="xs" color="dimmed" className="truncate w-36">
              {(LSData as unknown as LSData)?.email || "Unknown"}
            </Text>
          </div>
        </Button>
      </Menu.Target>
    </Menu>
  );
}
