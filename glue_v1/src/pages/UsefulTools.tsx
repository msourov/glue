import { Box, Card } from "@mantine/core";
import { IconFiles, IconTools, IconWorld } from "@tabler/icons-react";

const UsefulTools = () => {
  return (
    <div className="max-w-[100%]">
      <h1 className="text-2xl font-bold mx-8 my-4">Home</h1>
      <div className="flex flex-row max-w-{100%} justify-evenly mt-12">
        <Box className="flex flex-1 bg-white max-w-[25%] flex-col py-6 px-4 rounded-lg gap-2 ">
          <div className="flex gap-2">
            <span>
              <IconTools />
            </span>
            <h2 className="font-bold text-xl">Tools</h2>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Slack</h2>
              <p className="text-sm">Communication</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">ChatGPT</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Notion</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[25%] flex-col py-6 px-4 rounded-lg gap-2 ">
          <div className="flex gap-2">
            <span>
              <IconFiles />
            </span>
            <h1 className="text-xl font-bold">Documents</h1>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Slack</h2>
              <p className="text-sm">Communication</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">ChatGPT</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Notion</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[25%] flex-col py-6 px-4 rounded-lg gap-2 min-h-screen">
          <div className="flex gap-2">
            <span>
              <IconWorld />
            </span>
            <h1 className="text-xl font-bold">Websites</h1>
          </div>

          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Slack</h2>
              <p className="text-sm">Communication</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">ChatGPT</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Card
              shadow="sm"
              radius="md"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 p-4"
              withBorder
            >
              <Card className="w-4 h-4 bg-gray-300" withBorder />
            </Card>
            <div>
              <h2 className="text-lg">Notion</h2>
              <p className="text-sm">Productivity</p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default UsefulTools;
