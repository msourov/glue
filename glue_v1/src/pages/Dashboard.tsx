import { Box } from "@mantine/core";
import { useEffect, useState } from "react";
import api from "../services/api";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import useLocalStorage from "../services/hooks/useLocalStorage";

interface Video {
  uid: string;
  types: "Instagram" | "Tiktok";
  url_content: string;
}
interface LSData {
  name: string;
  email: string;
  uid: string;
}

const Dashboard = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [LSData] = useLocalStorage<string | Record<string, unknown>>(
    "loggedInUser",
    null
  );
  const name = (LSData as unknown as LSData)?.name || "";

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await api().get("/margaret/v1/social/all");
        setVideos(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getVideo();
  }, []);
  return (
    <div className="max-w-[100%]">
      <h1 className="text-2xl font-bold mx-8 my-4">
        Welcome back,{" "}
        <span className="text-gray-800 font-medium">{name.split(" ")[0]}</span>
      </h1>
      <div className="flex flex-row max-w-[100%] justify-around mt-12">
        <Box className="flex flex-1 bg-white max-w-[70%] flex-col p-6 rounded-lg">
          <h2 className="font-bold text-2xl">Current trends</h2>
          <br />
          <div className="flex flex-wrap  mt-6 ">
            {videos.map((item) => (
              <Box key={item.uid} className="max-w-[325px] mx-4 mb-8">
                {item.types === "Instagram" ? (
                  <InstagramEmbed
                    url={item?.url_content}
                    width={300}
                    height={380}
                  />
                ) : (
                  <TikTokEmbed
                    url={item?.url_content}
                    width={300}
                    height={380}
                  />
                )}
              </Box>
            ))}
          </div>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[20%] p-6 rounded-lg">
          <h1 className="text-xl font-bold">Upcoming Events</h1>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
