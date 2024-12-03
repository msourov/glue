import { Box } from "@mantine/core";

const Settings = () => {
  return (
    <div className="max-w-[100%] mx-8 mt-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-gray-500">Change your information and preferences</p>
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
