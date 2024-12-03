import { Box, Button, Divider } from "@mantine/core";
import { IconCheck, IconCurrencyPound } from "@tabler/icons-react";

const Photography = () => {
  return (
    <div className="max-w-[100%]">
      <h1 className="text-3xl font-bold mx-4 sm:mx-8 my-4">Videography</h1>
      <div className="flex flex-row max-w-[100%] justify-evenly mt-4">
        <Box className="flex flex-1  max-w-[70%] flex-col p-2 rounded-xl">
          <h2 className="font-medium text-2xl">Content shoot session</h2>
          <Box className="flex flex-wrap  mt-4 bg-white p-4 rounded-xl">
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
          <Box className="bg-white py-6 px-4 rounded-xl">
            <h1 className="text-lg font-semibold">Recent Work</h1>
          </Box>
        </Box>
        <Box className="flex max-w-[40%] p-2 rounded-xl flex-col">
          <h1 className="font-medium text-2xl">Book the service</h1>
          <Box className="py-4 px-6 bg-white rounded-xl mt-4">
            <h1 className="font-bold">Ultra member</h1>
            <div className="flex text-2xl items-center font-bold">
              <div className="font-extrabold">
                <IconCurrencyPound stroke-width="3" className="mx-[-4px]" />
              </div>
              <h1>
                79
                <span className="text-gray-400 font-thin text-lg ml-1">
                  per video
                </span>
              </h1>
            </div>
            <Divider className="my-6 -mx-6" />
            <div className="flex justify-center">
              <Button
                bg="black"
                type="submit"
                className="h-auto py-4 px-8 mb-2 rounded-l"
              >
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

export default Photography;
