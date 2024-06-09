import { Group, Box, ThemeIcon, Text, UnstyledButton } from "@mantine/core";
import {
  IconBrandYoutubeFilled,
  IconCalendarEvent,
  IconCalendarFilled,
  IconCalendarStats,
  IconCameraFilled,
  IconMessageFilled,
  IconRss,
  IconSectionFilled,
  IconSettingsFilled,
  IconSunglassesFilled,
  IconTimelineEventFilled,
  IconUserFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import { useNavigate } from "react-router-dom";

interface IconProps {
  // Add specific prop types here based on the Icon component's documentation
  className?: string;
}

interface LinksGroupProps {
  key: string;
  icon: React.FC<IconProps>;
  label: string;
  link?: string;
}

export function LinksGroup({ icon: Icon, label, link }: LinksGroupProps) {
  const navigate = useNavigate();
  const handleClick: () => void = () => {
    // Specify function type with void return
    if (link) {
      navigate(link);
    }
  };
  return (
    <>
      <UnstyledButton className={classes.control} onClick={handleClick}>
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
      { label: "RSR Feed", icon: IconRss, link: "/rsr-feed" },
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
      {
        label: "Cool Content",
        icon: IconBrandYoutubeFilled,
        link: "/cool-content",
      },
      { label: "Events", icon: IconTimelineEventFilled, link: "/events" },
      {
        label: "My Membership",
        icon: IconUserFilled,
        link: "/my-membership",
      },
      {
        label: "Useful Tools",
        icon: IconSettingsFilled,
        link: "/useful-tools",
      },
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
  return (
    <Box mih={220} p="lg" m="0">
      {mockdata.map((group, index) => (
        <div key={index}>
          {group.title && (
            <Text className={classes.groupTitle}>{group.title}</Text>
          )}
          {group.items.map((item) => (
            <LinksGroup
              key={item.label}
              icon={item.icon}
              label={item.label}
              link={item.link}
            />
          ))}
        </div>
      ))}
    </Box>
  );
}
