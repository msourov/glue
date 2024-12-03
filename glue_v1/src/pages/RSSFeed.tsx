import { Box, Card, ScrollArea, Skeleton, Text } from "@mantine/core";
import api from "../services/api";
import { useEffect, useState } from "react";

interface FeedItem {
  time: number;
  active: boolean;
  category: string | null;
  create_at: string;
  description: string;
  extension: string;
  id: number;
  link: string;
  logs: unknown[]; // You might want to define a type for logs as well
  pub_date: string;
  title: string;
  uid: string;
  update_at: string;
  is_featured: boolean;
}

interface FetchedFeed {
  data: {
    data: FeedItem[];
  };
}

const RSSFeed = () => {
  const [rssfeedData, setRssfeedData] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getRssFeedData = async (): Promise<FetchedFeed> => {
      try {
        const response = await api().get("margaret/v1/rss_feed/all");
        setRssfeedData(response.data.data);
        setIsLoading(false);
        return response.data;
      } catch (error) {
        console.error(error);
        return { data: { data: [] } };
      }
    };
    getRssFeedData();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    const truncated = text.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  };

  const featuredArticles = rssfeedData.filter((item) => item.is_featured);
  const normalArticles = rssfeedData.filter((item) => !item.is_featured);

  return (
    <div className="max-w-[100%] mx-8">
      <ScrollArea style={{ height: "calc(95vh - 80px)", marginTop: "0.75rem" }}>
        <div className="my-4">
          <h1 className="text-3xl font-bold">Cool Content</h1>
          <p className="text-gray-500">
            Articles to get more business knowledge
          </p>
        </div>
        <h1 className="font-medium text-2xl mt-6">Featured articles</h1>

        <div className="flex flex-row max-w-[100%] gap-4">
          {isLoading ? (
            Array.from({ length: 1 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : featuredArticles.length > 0 ? ( // Check if there are featured articles
            <Box className="rounded-2xl mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((item: FeedItem) => (
                <Card
                  padding="md"
                  component="a"
                  href={item?.link}
                  target="_blank"
                  className="flex lg:flex-col xl:flex-row rounded-xl md:items-center lg:px-2"
                  key={item.id}
                >
                  <img
                    src={`https://api.glue.pitetris.com/margaret/v1/rss_feed/show/no/${item?.uid}`}
                    alt="No way!"
                    className="w-[60%] h-[140px] my-auto md:w-[70%]"
                  />

                  <div className="mx-8 align-top">
                    <Text fw={600} size="lg" mt="md">
                      {item?.title}
                    </Text>
                    <Text c="dimmed">
                      {item?.category} <span className="font-bold mx-2">.</span>{" "}
                      {item?.time} minutes read
                    </Text>
                    <Text mt="xs" c="dimmed" size="sm">
                      {truncateText(item?.description, 180)}{" "}
                      <span className="italic">read more</span>
                    </Text>
                  </div>
                </Card>
              ))}
            </Box>
          ) : (
            <Text>No featured articles available.</Text>
          )}
        </div>
        <h1 className="font-medium text-2xl mt-6 ">Recent articles</h1>

        <Box className="rounded-2xl mt-4 grid grid-cols-1 md:grid-cols-2 ">
          {normalArticles &&
            normalArticles.map((item: FeedItem) => (
              <Card
                padding="md"
                component="a"
                href={item?.link}
                target="_blank"
                className="lg:flex-col xl:flex-row border border-gray-200 md:items-center lg:px-2"
                key={item.id}
              >
                <img
                  src={`https://api.glue.pitetris.com/margaret/v1/rss_feed/show/no/${item?.uid}`}
                  alt="No way!"
                  className="w-[60%] h-[140px] md:w-[70%]"
                />

                <div className="mx-8 align-top">
                  <Text fw={600} size="lg" mt="md">
                    {item?.title}
                  </Text>
                  <Text c="dimmed">
                    {item?.category} <span className="font-bold mx-2">.</span>{" "}
                    {item?.time} minutes read
                  </Text>
                  <Text mt="xs" c="dimmed" size="sm">
                    {truncateText(item?.description, 180)}{" "}
                    <span className="italic">read more</span>
                  </Text>
                </div>
              </Card>
            ))}
        </Box>
      </ScrollArea>
    </div>
  );
};

export default RSSFeed;

const SkeletonCard = () => {
  return (
    <Card shadow="sm" padding="lg" className="flex flex-row mb-4">
      <Skeleton height={150} width={"80vw"} />
      <Box
        style={{
          marginLeft: "16px",
          flex: 1,
        }}
      >
        <Skeleton height={20} width="70%" mb="sm" />
        <Skeleton height={15} width="90%" mb="xs" />
        <Skeleton height={15} width="80%" />
      </Box>
    </Card>
  );
};
