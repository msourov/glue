import { lazy } from "react";

export const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
export const Members = lazy(() => import("./pages/Dashboard/Members"));
export const ContentCalendar = lazy(
  () => import("./pages/Memberhub/ContentCalendar")
);
export const EventsCalendar = lazy(
  () => import("./pages/Memberhub/EventsCalendar")
);
export const RSSFeed = lazy(() => import("./pages/Memberhub/RSSFeed"));
export const Videography = lazy(() => import("./pages/Services/Videography"));
export const Photography = lazy(() => import("./pages/Services/Photography"));
export const Editing = lazy(() => import("./pages/Services/Editing"));
export const GlueAccess = lazy(() => import("./pages/Services/GlueAccess"));
export const Chat = lazy(() => import("./pages/Community/Chat"));
export const ContentDrive = lazy(
  () => import("./pages/Memberhub/ContentDrive")
);
// export const Events = lazy(() => import("./pages/Events"));
export const MyMembership = lazy(() => import("./pages/User/MyMembership"));
export const UsefulTools = lazy(() => import("./pages/UsefulTools"));
export const UserProfile = lazy(() => import("./pages/User/UserProfile"));
export const Settings = lazy(() => import("./pages/User/Settings"));
export const Login = lazy(() => import("./pages/Authentication/Login"));
export const Signup = lazy(() => import("./pages/Authentication/Signup"));
export const ForgotPass = lazy(
  () => import("./pages/Authentication/ForgotPass")
);
export const VerifyMail = lazy(
  () => import("./pages/Authentication/VerifyMail")
);
