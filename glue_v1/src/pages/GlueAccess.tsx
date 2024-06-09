import { Box, Button } from "@mantine/core";
import { IconCheck, IconCurrencyPound } from "@tabler/icons-react";

const GlueAccess = () => {
  return (
    <div className="max-w-[100%]">
      <h1 className="text-2xl font-bold mx-8 my-8">Glue Access</h1>
      <div className="flex flex-row max-w-{100%} justify-around mt-2">
        <Box className="flex flex-col flex-1 bg-white max-w-[95%] p-6 gap-6">
          <h2 className="text-xl font-bold">Book your content shoot session</h2>
          <p>
            Our content creators understand creative and culture. Create
            engaging videos with use that will resonate with your audience and
            showcase your brand to the entire world.
          </p>
          <div>
            <h3 className="font-bold mb-4">Video shoot session includes</h3>
            <ul className="ml-2">
              <li className="flex gap-2">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
              <li className="flex gap-2">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
              <li className="flex gap-2">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
              <li className="flex gap-2">
                <IconCheck />
                <span>Access to our monthly newsletter</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="italic">Your Ultra Membership Price</p>
            <div className="flex text-2xl items-center font-bold">
              <div className="font-extrabold">
                <IconCurrencyPound stroke-width="3" className="mx-[-4px]" />
              </div>
              <h1>
                79<span className="text-gray-400 font-thin">/video</span>
              </h1>
            </div>
          </div>
          <Button bg="black" type="submit" w={200}>
            {" "}
            Get Started
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default GlueAccess;
