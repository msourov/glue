import {
  Box,
  Button,
  Checkbox,
  Select,
  SimpleGrid,
  Text,
  Title,
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
  return (
    <div className=" flex flex-col gap-4 md:gap-8 mx-auto max-w-[90%] my-12">
      <Box>
        <Title order={3}>Settings</Title>
        <p className="text-gray-500">Change your information and preferences</p>
      </Box>
      <Box>
        <Title order={3} fw={500} mb={16}>
          Theme
        </Title>
        <Select
          size="sm"
          w="200px"
          placeholder="Select a theme"
          defaultValue="light"
          data={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </Box>
      {/* <div className="flex flex-row max-w-[100%] "> */}
      <Box>
        <Title order={3} fw={500} mb={16}>
          Manage your plan
        </Title>
        <Box className="flex flex-col p-6 bg-white gap-2">
          <Text c="blue" className="text-lg font-medium">
            Pro Membership
          </Text>
          <Button variant="light" color="black" size="sm" className="w-fit">
            Change plan
          </Button>
        </Box>
      </Box>
      <Box>
        <Title order={3} fw={500} mb={16}>
          Notifications
        </Title>
        <Checkbox
          defaultChecked
          color="gray"
          label="I want to receive email notifications whenever there's a progress on my orders"
        />
      </Box>
      <Box>
        <Title order={3} fw={500} mb={16}>
          Services statistics
        </Title>
        <SimpleGrid cols={{ base: 2, md: 3, lg: 4 }}>
          {statisticsData.map((item) => (
            <Box className="bg-white p-4 text-center">
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
