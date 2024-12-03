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
import { useEffect, useState } from "react";
import { ProfileSection } from "../../../pages/ProfileSection";

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
  link,
}: LinksGroupProps & { isActive: boolean; onClick: () => void }) {
  const navigate = useNavigate();
  const handleClick: () => void = () => {
    if (link) {
      navigate(link);
    }
    onClick();
  };
  // console.log(activeLink);
  return (
    <>
      <UnstyledButton
        className={`${classes.control} ${isActive ? classes.active : ""}`}
        onClick={handleClick}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
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
        label: "Your Content Drive",
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
      { label: "Chat", icon: IconMessageFilled, link: "/Chat" },
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
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    setActiveLink(currentPath);
  }, [location]);
  console.log(activeLink);
  return (
    <Box px="lg" py="md" m="0" className="overflow-y-auto h-full flex flex-col">
      <Box className="flex-grow">
        {mockdata.map((group, index) => (
          <div key={index} className="mb-4">
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
                isActive={activeLink === item.link}
                link={item.link}
                onClick={() => {
                  if (item.link) {
                    setActiveLink(item.link);
                  }
                }}
              />
            ))}
          </div>
        ))}
      </Box>
      <Divider />
      <Box className="mb-14">
        <ProfileSection />
      </Box>
    </Box>
  );
}
