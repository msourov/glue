import { Box, Text, useMantineColorScheme } from "@mantine/core";
import { Menu, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../services/hooks/useLocalStorage";
import { useState } from "react";

interface LSData {
  name: string;
  email: string;
  uid: string;
}

export function ProfileSection() {
  return (
    <Box className="profile-section fixed w-fit text-center py-4 z-10 gap-2">
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
  const [timestamp] = useState<number>(Date.now());
  const { colorScheme } = useMantineColorScheme();
  const { uid } = LSData as unknown as LSData;
  const imageUrl = `https://api.glue.pitetris.com/margaret/v1/user/profile/show/no/${uid}?${timestamp}`;

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
          <div className="flex items-center justify-center">
            {/* Image styling */}
            <img
              src={imageUrl}
              alt="user"
              className="w-10 h-10 rounded-full object-cover" // Updated image size and rounded corners
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
            <Text
              mt="md"
              size="sm"
              className={`font-semibold truncate w-32 ${
                colorScheme === "light" ? "" : "text-white"
              }`}
            >
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
