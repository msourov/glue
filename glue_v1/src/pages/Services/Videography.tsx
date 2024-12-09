import { Box, Button, Divider, Title } from "@mantine/core";
import { IconCheck, IconCurrencyPound } from "@tabler/icons-react";
import Videos from "../../components/FileRender/Videos";

const Videography = () => {
  return (
    <div className="mx-4 mt-4 w-full">
      <Title order={2} c="dimmed" className="border-b-2 border-black p-1 mb-6">
        Videography
      </Title>
      <div className="flex flex-wrap justify-evenly w-[95%] mx-auto">
        <Box className="flex flex-col w-[70%] p-2 rounded-xl">
          <h2 className="font-medium text-2xl">Content shoot session</h2>
          <Box className="flex flex-wrap mt-4 bg-white p-4 rounded-xl">
            <p>
              Our content creators understand creative and culture. Create
              engaging videos with us that will resonate with your audience and
              showcase your brand to the entire world.
            </p>
            <br />
            <p>
              Our content creators understand creative and culture. Create
              engaging videos with us that will resonate with your audience and
              showcase your brand to the entire world.
            </p>
          </Box>
          <Box className="grid grid-cols-2 bg-white my-4 rounded-xl">
            <p className=" p-2 aspect-w-1 aspect-h-1 border">
              <li className="flex gap-2 py-2 ml-1">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
            </p>
            <p className=" p-2 aspect-w-1 aspect-h-1 border">
              <li className="flex gap-2 py-2 ml-1">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
            </p>
            <p className=" p-2 aspect-w-1 aspect-h-1 border">
              <li className="flex gap-2 py-2 ml-1">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
            </p>
            <p className=" p-2 aspect-w-1 aspect-h-1 border">
              <li className="flex gap-2 py-2 ml-1">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
            </p>
          </Box>
          <Box className="bg-white py-6 rounded-xl overflow-x-hidden">
            <h1 className="text-lg font-semibold mx-6">Recent Work</h1>
            <Videos title="" />
          </Box>
        </Box>
        <Box className="flex w-[25%] p-2 rounded-xl flex-col">
          <h1 className="font-medium text-2xl">Book the service</h1>
          <Box className="bg-white rounded-xl mt-4">
            <Box
              style={{
                background: "linear-gradient(90deg, #fcd34d, #fbbf24, #d97706)",
                // borderRadius: "12px",
                color: "black",
                padding: "1rem 1.5rem",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h1 className="font-bold">Ultra member</h1>
              <div className="flex text-2xl items-center font-bold">
                <div className="font-extrabold">
                  <IconCurrencyPound strokeWidth="3" className="mx-[-4px]" />
                </div>
                <h1>
                  79
                  <span className="text-gray-600 font-thin text-lg ml-1">
                    per video
                  </span>
                </h1>
              </div>
            </Box>

            <Divider />
            <div className="flex justify-center my-4">
              <Button bg="black" type="submit" className="px-6 rounded-l">
                {" "}
                Book a shoot session
              </Button>
            </div>
          </Box>
          <Box className="py-4 px-6 bg-white rounded-xl mt-8 h-[45vh]">
            <h1 className="font-semibold text-xl">Additional bolt-ons</h1>
            <ul>
              <li>
                <span className="text-3xl font-bold">.</span> Access to our
                monthly newsletter
              </li>
              <li>
                <span className="text-3xl font-bold">.</span> Access to our
                monthly newsletter
              </li>
              <li>
                <span className="text-3xl font-bold">.</span> Access to our
                monthly newsletter
              </li>
              <li>
                <span className="text-3xl font-bold">.</span> Access to our
                monthly newsletter
              </li>
            </ul>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Videography;
