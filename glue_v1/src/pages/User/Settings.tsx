import {
  Box,
  Button,
  Checkbox,
  Select,
  SimpleGrid,
  Text,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

const statisticsData = [
  {
    title: "Videography",
    quantity: "8 videos",
  },
  {
    title: "Photography",
    quantity: "30 photos",
  },
  {
    title: "Editing",
    quantity: "12 videos",
  },
  {
    title: "Glue Access",
    quantity: "20 days",
  },
];

const Settings = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <div className="flex flex-col gap-6 md:gap-10 mx-auto max-w-[90%] my-12">
      <Box>
        <Title order={3}>Settings</Title>
        <p className="text-gray-500">Change your information and preferences</p>
      </Box>
      <Box>
        <Title order={3} fw={500} mb={10}>
          Theme
        </Title>
        <Select
          size="sm"
          w="200px"
          placeholder="Select a theme"
          defaultValue={colorScheme}
          onChange={() =>
            setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
          }
          data={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </Box>
      {/* <div className="flex flex-row max-w-[100%] "> */}
      <Box>
        <Title order={3} fw={500} mb={10}>
          Manage your plan
        </Title>
        <Box
          className={`flex flex-col p-6 gap-2 ${
            colorScheme === "light" ? "bg-white" : "border"
          }`}
        >
          <Text c="blue" className="text-lg font-medium">
            Pro Membership
          </Text>
          <Button
            variant="light"
            color={`${colorScheme === "light" ? "black" : "gray"}`}
            size="sm"
            className="w-fit"
          >
            Change plan
          </Button>
        </Box>
      </Box>
      <Box>
        <Title order={3} fw={500} mb={10}>
          Notifications
        </Title>
        <Checkbox
          defaultChecked
          color="gray"
          label="I want to receive email notifications whenever there's a progress on my orders"
        />
      </Box>
      <Box>
        <Title order={3} fw={500} mb={10}>
          Services statistics
        </Title>
        <SimpleGrid cols={{ base: 2, md: 3, lg: 4 }}>
          {statisticsData.map((item) => (
            <Box
              className={`p-4 text-center ${
                colorScheme === "light" ? "bg-white" : "border"
              }`}
            >
              <Text c="dimmed">{item.title}</Text>
              <Text fw={700}>{item.quantity}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Settings;
