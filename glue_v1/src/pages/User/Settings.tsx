import { Box, Select, Title } from "@mantine/core";

const Settings = () => {
  return (
    <div className=" flex flex-col gap-4 md:gap-6 mx-auto max-w-[90%] my-12">
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
          w=""
          placeholder="Select a theme"
          defaultValue="light"
          data={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </Box>
      {/* <div className="flex flex-row max-w-[100%] "> */}
      <h2 className="font-semibold text-2xl mt-8">Profile</h2>
      <div className="flex flex-row max-w-[100%] justify-around mt-2">
        <Box className="flex flex-1 bg-white flex-col p-6 rounded-lg"></Box>
      </div>
      <h2 className="font-semibold text-2xl mt-8">Manage Your Plan</h2>
      <div className="flex flex-row max-w-[100%] justify-around mt-2">
        <Box className="flex flex-1 bg-white flex-col p-6 rounded-lg"></Box>
      </div>
      <h2 className="font-semibold text-2xl mt-8">Notifications</h2>
    </div>
  );
};

export default Settings;
