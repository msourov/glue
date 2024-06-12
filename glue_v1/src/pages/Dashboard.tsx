import { Box } from "@mantine/core";

const Dashboard = () => {
  return (
    <div className="max-w-[100%]">
      <h1 className="text-2xl font-bold mx-8 my-4">Home</h1>
      <div className="flex flex-row max-w-{100%} justify-around mt-12">
        <Box className="flex flex-1 bg-white max-w-[70%] flex-col p-6 rounded-lg">
          <h2 className="font-bold text-2xl">Current trends</h2>
          <br />
          <h1 className="font-medium text-xl">Food & Beverage</h1>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[20%] p-6 rounded-lg">
          <h1 className="text-xl font-bold">Upcoming Events</h1>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
