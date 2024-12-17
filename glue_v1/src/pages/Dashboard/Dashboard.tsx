import { Box, Card, Text, useMantineColorScheme } from "@mantine/core";
// import { useEffect, useState } from "react";
// import api from "../../services/api";
import useLocalStorage from "../../services/hooks/useLocalStorage";
import Videos from "../../components/FileRender/Videos";

// interface Video {
//   uid: string;
//   types: "Instagram" | "Tiktok";
//   url_content: string;
// }
interface LSData {
  name: string;
  email: string;
  uid: string;
}

const Dashboard = () => {
  // const [videos, setVideos] = useState<Video[]>([]);
  const [LSData] = useLocalStorage<string | Record<string, unknown>>(
    "loggedInUser",
    null
  );
  const name = (LSData as unknown as LSData)?.name || "";
  const { colorScheme } = useMantineColorScheme();
  // useEffect(() => {
  //   const getVideo = async () => {
  //     try {
  //       const res = await api().get("/margaret/v1/social/all");
  //       setVideos(res.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getVideo();
  // }, []);

  return (
    <div className="md:w-[95%] lg:w-[90%] mx-auto">
      <div className="w-fit">
        <h1 className="text-2xl my-2 mt-4">
          Welcome back,{" "}
          <span className="text-blue-500 font-bold">{name.split(" ")[0]}</span>
        </h1>
        <Text c="dimmed">Have a look at the newest trends</Text>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <Box className="flex flex-col gap-4 sm:w-full md:w-[70%] lg:w-[70%] my-8">
          <Videos title={"Food & Beverages"} />
          <Videos title={"Beauty"} />
        </Box>
        <Box
          className={` px-2 rounded-lg my-8 pt-2 pb-4 h-fit ${
            colorScheme === "light" ? "bg-white" : "border"
          } rounded-md flex-shrink-0`}
        >
          <Text
            c="dimmed"
            className="text-xl text-center pb-2 mb-4 border-b-2 border-blue-300"
          >
            Upcoming Events
          </Text>
          <Box>
            {Array.from({ length: 3 }).map((_, ind) => (
              <Card
                key={ind}
                className={`flex flex-row mb-1 py-2 items-center ${
                  colorScheme === "light" ? "" : "outline"
                }`}
              >
                <Box className="flex justify-center gap-4">
                  <Box
                    className={`w-12 h-12 m-auto text-center ${
                      colorScheme === "light" ? "bg-gray-200" : "border"
                    } rounded-md flex-shrink-0`}
                  >
                    <Text fw="bold">{ind + 19}</Text>
                    <Text size="xs">JUN</Text>
                  </Box>
                  <Box>
                    <Text size="sm" fw={600}>
                      The Intent and Impact of Social Media Algorithms
                    </Text>
                    <Text size="sm" c="dimmed">
                      9:00 Am - 10:00 AM GMT
                    </Text>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
