import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import ContentCalendar from "./pages/ContentCalendar";
import EventsCalendar from "./pages/EventsCalendar";
import RSSFeed from "./pages/RSSFeed";
import Videography from "./pages/Videography";
import Photography from "./pages/Photography";
import Editing from "./pages/Editing";
import GlueAccess from "./pages/GlueAccess";
import Chat from "./pages/Chat";
import CoolContent from "./pages/ContentDrive";
import Events from "./pages/Events";
import MyMembership from "./pages/MyMembership";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import { ProtectedRoute } from "./services/auth/ProtectedRoute";
import UsefulTools from "./pages/UsefulTools";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import VerifyMail from "./pages/VerifyMail";
import UserProfile from "./pages/UserProfile";
import ContentDrive from "./pages/ContentDrive";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "members",
        element: (
          <ProtectedRoute>
            <Members />
          </ProtectedRoute>
        ),
      },
      {
        path: "content-calendar",
        element: (
          <ProtectedRoute>
            <ContentCalendar />
          </ProtectedRoute>
        ),
      },
      {
        path: "events-calendar",
        element: (
          <ProtectedRoute>
            <EventsCalendar />
          </ProtectedRoute>
        ),
      },
      {
        path: "rss-feed",
        element: (
          <ProtectedRoute>
            <RSSFeed />
          </ProtectedRoute>
        ),
      },
      {
        path: "content-drive",
        element: (
          <ProtectedRoute>
            <ContentDrive />
          </ProtectedRoute>
        ),
      },
      {
        path: "videography",
        element: (
          <ProtectedRoute>
            <Videography />
          </ProtectedRoute>
        ),
      },
      {
        path: "photography",
        element: (
          <ProtectedRoute>
            <Photography />
          </ProtectedRoute>
        ),
      },
      {
        path: "editing",
        element: (
          <ProtectedRoute>
            <Editing />
          </ProtectedRoute>
        ),
      },
      {
        path: "glue-access",
        element: (
          <ProtectedRoute>
            <GlueAccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "chat",
        element: (
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        ),
      },
      {
        path: "cool-content",
        element: (
          <ProtectedRoute>
            <CoolContent />
          </ProtectedRoute>
        ),
      },
      {
        path: "events",
        element: (
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-membership",
        element: (
          <ProtectedRoute>
            <MyMembership />
          </ProtectedRoute>
        ),
      },
      {
        path: "useful-tools",
        element: (
          <ProtectedRoute>
            <UsefulTools />
          </ProtectedRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "verify-mail",
    element: <VerifyMail />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot-password",
    element: <ForgotPass />,
  },
]);
