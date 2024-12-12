import { ActionIcon, Box, ScrollArea, Text } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { FC, useRef } from "react";

interface VideoProps {
  title: string;
}

const Videos: FC<VideoProps> = ({ title }) => {
  const videoIds = [
    "7238998697961458971",
    "7402971142346116384",
    "7191977775106968837",
    "7438190325643939104",
    "7282038996211977478",
  ];
  const baseEmbedUrl = "https://www.tiktok.com/static/profile-video";
  const viewport = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (viewport.current) {
      viewport.current.scrollBy({
        left: -300, // Scroll to the left by 300px
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (viewport.current) {
      viewport.current.scrollBy({
        left: 300, // Scroll to the right by 300px
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="relative max-w-[90%] py-2 pb-8 px-8 bg-white rounded-lg">
      {title && (
        <Text mb={8} fw={500} size="lg" c="yellow">
          {title}
        </Text>
      )}
      <ScrollArea type="never" viewportRef={viewport}>
        <Box className="flex overflow-x-scroll scrollbar-hidden max-w-full">
          {videoIds.map((id) => (
            <Box key={id} className="min-w-[220px] max-w-[240px] flex-shrink-0">
              <iframe
                src={`${baseEmbedUrl}?id=${id}&hide_author=1&utm_campaign=tt4d_open_api&utm_source=awbx37vxswqcvsf6`}
                width="90%"
                height="380"
                allowFullScreen
                title={`TikTok Video ${id}`}
                style={{ border: "none" }}
              ></iframe>
            </Box>
          ))}
        </Box>
      </ScrollArea>
      <ActionIcon
        variant="subtle"
        aria-label="LeftArrow"
        radius="xl"
        size={42}
        color="gray"
        className="absolute z-10 left-0 top-[45%] text-black"
        onClick={scrollLeft}
      >
        <IconChevronLeft size={48} />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        aria-label="RightArrow"
        radius="xl"
        size={42}
        color="gray"
        className="absolute z-10 right-0 top-[45%] text-black"
        onClick={scrollRight}
      >
        <IconChevronRight size={48} />
      </ActionIcon>
    </Box>
  );
};

export default Videos;
