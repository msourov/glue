import {
  Group,
  Box,
  ThemeIcon,
  Text,
  UnstyledButton,
  Divider,
} from "@mantine/core";
import {
  IconBrandOnedrive,
  IconBrandYoutubeFilled,
  IconCalendarEvent,
  IconCalendarFilled,
  IconCalendarStats,
  IconCameraFilled,
  IconMessageFilled,
  IconRss,
  IconSectionFilled,
  IconSunglassesFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileSection } from "../../../pages/User/ProfileSection";

interface IconProps {
  // Add specific prop types here based on the Icon component's documentation
  className?: string;
}

interface LinksGroupProps {
  key: string;
  icon: React.FC<IconProps>;
  label: string;
  isActive: boolean;
  link?: string;
  onClick: () => void;
}

export function LinksGroup({
  icon: Icon,
  label,
  isActive,
  onClick,
}: LinksGroupProps & { isActive: boolean; onClick: () => void }) {
  return (
    <>
      <UnstyledButton
        className={`${classes.control} ${isActive ? classes.active : ""}`}
        onClick={onClick}
      >
        <Group justify="space-between" gap={0}>
          <Box className="flex items-center">
            <ThemeIcon size={30} className="bg-white text-black">
              {/* <Icon style={{ width: rem(18), height: rem(18) }} /> */}
              <Icon className="tabler-icon-size-md" />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
        </Group>
      </UnstyledButton>
    </>
  );
}

const mockdata = [
  {
    items: [
      { label: "Home", icon: IconCalendarStats, link: "/" },
      { label: "Members", icon: IconUsersGroup, link: "/members" },
    ],
  },
  {
    title: "Member Hub",
    items: [
      {
        label: "Content Calendar",
        icon: IconCalendarFilled,
        link: "/content-calendar",
      },
      {
        label: "Events Calendar",
        icon: IconCalendarEvent,
        link: "/events-calendar",
      },
      { label: "RSS Feed", icon: IconRss, link: "/rss-feed" },
      {
        label: "Resources",
        icon: IconBrandOnedrive,
        link: "/content-drive",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Videography",
        icon: IconBrandYoutubeFilled,
        link: "/videography",
      },
      { label: "Photography", icon: IconCameraFilled, link: "/photography" },
      { label: "Editing", icon: IconSectionFilled, link: "/editing" },
      {
        label: "Glue Access",
        icon: IconSunglassesFilled,
        link: "/glue-access",
      },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Club Glue", icon: IconMessageFilled, link: "/Chat" },
      // {
      //   label: "Cool Content",
      //   icon: IconBrandYoutubeFilled,
      //   link: "/cool-content",
      // },
      // // { label: "Events", icon: IconTimelineEventFilled, link: "/events" },
      // {
      //   label: "My Membership",
      //   icon: IconUserFilled,
      //   link: "/my-membership",
      // },
      // {
      //   label: "Useful Tools",
      //   icon: IconSettingsFilled,
      //   link: "/useful-tools",
      // },
    ],
  },
];

interface Group {
  title: string;
  items: {
    label: string;
    icon: React.FC<IconProps>;
    link: string;
  };
}
export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box px="lg" py="md" className="overflow-y-auto h-[100%] flex flex-col">
      <Box className="flex-1">
        {mockdata.map((group, index) => (
          <div key={index} className="">
            {group.title && (
              <Text className="font-bold text-gray-600 mb-2">
                {group.title}
              </Text>
            )}
            {group.items.map((item) => (
              <LinksGroup
                key={item.label}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.link}
                link={item.link}
                onClick={() => navigate(item.link || "/")}
              />
            ))}
          </div>
        ))}
      </Box>
      <Divider />
      <Box className="mb-12">
        <ProfileSection />
      </Box>
    </Box>
  );
}
