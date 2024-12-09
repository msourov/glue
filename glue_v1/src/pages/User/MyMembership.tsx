import { Box, Button } from "@mantine/core";
import { IconCheck, IconCurrencyPound } from "@tabler/icons-react";

const MyMembership = () => {
  return (
    <div className="max-w-[100%]">
      <h1 className="text-2xl font-bold mx-8 my-4">Memberships</h1>
      <div className="flex flex-row max-w-[100%] justify-evenly mt-10">
        <Box className="flex flex-1 bg-white max-w-[30%] flex-col py-4 px-4 rounded-lg gap-2 ">
          <h2 className="font-bold text-xl">Ultra Membership</h2>
          <p>
            Our most comprehensive membership with access to all of our services
            and discounted creative services.
          </p>
          <div className="flex text-2xl items-center font-bold">
            <div className="font-extrabold">
              <IconCurrencyPound strokeWidth="3" className="mx-[-4px]" />
            </div>
            <h1>
              79<span className="text-gray-400 font-thin">/m</span>
            </h1>
          </div>
          <Button
            type="submit"
            className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto bg-green-100 text-green-700 my-2"
          >
            Upgrade to this plan
          </Button>
          <hr className="border-t-1 border-black mb-4" />
          <div>
            <ul className="ml-2 flex flex-col gap-2">
              {[
                "Access to our monthly newsletter",
                "Access to our membership portal",
                "Dedicated account manager",
                "Access to Club Glue",
                "Access to Founder Resources",
                "Priority access to Glue content events",
                "Monthly social media strategy",
                "Unlimited free equipment hire through Glue Access",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <IconCheck stroke={2} className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-2">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Box>

        <Box className="flex flex-1 bg-white max-w-[30%] flex-col py-4 px-4 rounded-lg gap-2 ">
          <h2 className="font-bold text-xl">Pro Membership</h2>
          <p>Get exclusive benefits and discounts on our services.</p>
          <div className="flex text-2xl items-center font-bold">
            <div className="font-extrabold">
              <IconCurrencyPound strokeWidth="3" className="mx-[-4px]" />
            </div>
            <h1>
              19<span className="text-gray-400 font-thin">/m</span>
            </h1>
          </div>
          <Button
            type="submit"
            className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-black bg-white border-black mt-8 mb-2"
          >
            You have this one
          </Button>
          <hr className="border-t-1 border-black mb-4" />
          <div>
            <ul className="ml-2 flex flex-col gap-2">
              {[
                "Access to our monthly newsletter",
                "Access to our membership portal",
                "Dedicated account manager",
                "Access to Club Glue",
                "Access to Founder Resources",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <IconCheck stroke={2} className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-2">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[30%] flex-col py-4 px-4 rounded-lg gap-2 ">
          <h2 className="font-bold text-xl">Free Membership</h2>
          <p>
            Get familiar with our services and see if we are the right fit for
            you.
          </p>
          <div className="flex text-2xl items-center font-bold">
            <div className="font-extrabold">
              <IconCurrencyPound strokeWidth="3" className="mx-[-4px]" />
            </div>
            <h1>
              00<span className="text-gray-400 font-thin">/m</span>
            </h1>
          </div>
          <Button
            type="submit"
            className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto bg-red-200 text-red-700 mt-8 mb-2"
          >
            Downgrade your plan
          </Button>
          <hr className="border-t-1 border-black mb-4" />
          <div>
            <ul className="ml-2 flex flex-col gap-2">
              {[
                "Access to our monthly newsletter",
                "Access to our membership portal",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <IconCheck stroke={2} className="w-5 h-5 flex-shrink-0" />
                  <span className="ml-2">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MyMembership;
