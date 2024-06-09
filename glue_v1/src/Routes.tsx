import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import ContentCalendar from "./pages/ContentCalendar";
import EventsCalendar from "./pages/EventsCalendar";
import RSRFeed from "./pages/RSRFeed";
import Videography from "./pages/Videography";
import Photography from "./pages/Photography";
import Editing from "./pages/Editing";
import GlueAccess from "./pages/GlueAccess";
import Chat from "./pages/Chat";
import CoolContent from "./pages/CoolContent";
import Events from "./pages/Events";
import MyMembership from "./pages/MyMembership";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import { ProtectedRoute } from "./services/auth/ProtectedRoute";
import UsefulTools from "./pages/UsefulTools";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";

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
        path: "rsr-feed",
        element: (
          <ProtectedRoute>
            <RSRFeed />
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPass />,
  },
]);
