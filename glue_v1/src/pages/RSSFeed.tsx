import { useQuery } from "@tanstack/react-query";
import createApiClient from "../services/api";
import { Box, Card, Text, Skeleton, ScrollArea } from "@mantine/core";

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
}

interface FetchedFeed {
  data: {
    data: FeedItem[];
  };
}

const getRssFeedData = async (): Promise<FetchedFeed> => {
  try {
    const response = await createApiClient().get<FetchedFeed>(
      "margaret/v1/rss_feed/all"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { data: { data: [] } };
  }
};

const RSSFeed = () => {
  const { data: fetchedFeed, isLoading } = useQuery<FetchedFeed, Error>({
    queryFn: getRssFeedData,
    queryKey: ["fetchedFeed"],
  });

  return (
    <div className="max-w-[100%]">
      {/* <h1 className="text-2xl font-bold mx-8 my-4">RSS Feed</h1> */}
      <div className="flex flex-row max-w-{100%} justify-around mt-8">
        <Box className="flex flex-1 bg-white max-w-[65%] flex-col px-4 py-2 rounded-lg">
          <h2 className="font-medium text-xl mt-4 mx-2">Featured articles</h2>
          <ScrollArea
            style={{ height: "calc(95vh - 150px)", marginTop: "0.75rem" }}
          >
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              <FeedCard data={fetchedFeed?.data.data || []} />
            )}
          </ScrollArea>
        </Box>
        <Box className="flex flex-1 bg-white max-w-[25%] p-6 rounded-lg">
          <h1 className="text-xl font-bold">Upcoming Events</h1>
        </Box>
      </div>
    </div>
  );
};

export default RSSFeed;

interface FeedCardProps {
  data: FeedItem[];
}

const FeedCard = ({ data }: FeedCardProps) => {
  console.log("data", data);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    const truncated = text.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  };

  return (
    <>
      {data &&
        data.map((item: FeedItem) => (
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href={item?.link}
            target="_blank"
            className="flex flex-row mb-4"
            key={item.id}
          >
            <img
              src={`https://api.glue.pitetris.com/margaret/v1/rss_feed/show/no/${item?.uid}`}
              alt="No way!"
              className="w-[180px] h-[140px] my-auto"
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
    </>
  );
};

const SkeletonCard = () => {
  return (
    <Card shadow="sm" padding="lg" className="flex flex-row mb-4">
      <Skeleton height={150} width={150} />
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
