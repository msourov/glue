import { Box, Card, Text } from "@mantine/core";
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
    <div className="w-[95%] mx-auto">
      <div className="w-fit">
        <h1 className="text-2xl my-2 mt-4">
          Welcome back,{" "}
          <span className="text-gray-800  font-bold">{name.split(" ")[0]}</span>
        </h1>
        <Text c="dimmed">Have a look at the newest trends</Text>
      </div>
      <div className="flex flex-row gap-4 justify-between">
        <Box className="flex flex-1 flex-col gap-4 w-[70%] my-8">
          <Videos title={"Food & Beverages"} />
          <Videos title={"Beauty"} />
        </Box>
        <Box className="w-[30%] px-2 rounded-lg my-8 pt-2 pb-4 bg-white h-fit">
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
                className="flex flex-row bg-gray-50 mb-1 py-2 items-center"
              >
                <Box className="flex justify-center gap-4">
                  <Box className="w-12 h-12 m-auto text-center bg-gray-200 rounded-md flex-shrink-0">
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
