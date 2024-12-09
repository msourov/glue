import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorPage from "./pages/Authentication/ErrorPage";
import { Loader } from "@mantine/core";

// Lazy load components
import {
  Dashboard,
  Members,
  ContentCalendar,
  EventsCalendar,
  RSSFeed,
  Videography,
  Photography,
  Editing,
  GlueAccess,
  Chat,
  ContentDrive,
  MyMembership,
  UsefulTools,
  UserProfile,
  Settings,
  Login,
  Signup,
  ForgotPass,
  VerifyMail,
} from "./lazyComponents";
import { ProtectedRoute } from "./services/auth/ProtectedRoute";
import PublicRoute from "./services/auth/PublicRoute";

const loader = (
  <div className="flex justify-center items-center">
    <Loader type="dots" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loader}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={loader}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "members",
            element: (
              <Suspense fallback={loader}>
                <Members />
              </Suspense>
            ),
          },
          {
            path: "content-calendar",
            element: (
              <Suspense fallback={loader}>
                <ContentCalendar />
              </Suspense>
            ),
          },
          {
            path: "events-calendar",
            element: (
              <Suspense fallback={loader}>
                <EventsCalendar />
              </Suspense>
            ),
          },
          {
            path: "rss-feed",
            element: (
              <Suspense fallback={loader}>
                <RSSFeed />
              </Suspense>
            ),
          },
          {
            path: "content-drive",
            element: (
              <Suspense fallback={loader}>
                <ContentDrive />
              </Suspense>
            ),
          },
          {
            path: "videography",
            element: (
              <Suspense fallback={loader}>
                <Videography />
              </Suspense>
            ),
          },
          {
            path: "photography",
            element: (
              <Suspense fallback={loader}>
                <Photography />
              </Suspense>
            ),
          },
          {
            path: "editing",
            element: (
              <Suspense fallback={loader}>
                <Editing />
              </Suspense>
            ),
          },
          {
            path: "glue-access",
            element: (
              <Suspense fallback={loader}>
                <GlueAccess />
              </Suspense>
            ),
          },
          {
            path: "chat",
            element: (
              <Suspense fallback={loader}>
                <Chat />
              </Suspense>
            ),
          },
          // {
          //   path: "cool-content",
          //   element: (
          //     <ProtectedRoute>
          //       <Suspense fallback={loader}>
          //         <CoolContent />
          //       </Suspense>
          //     </ProtectedRoute>
          //   ),
          // },
          {
            path: "my-membership",
            element: (
              <Suspense fallback={loader}>
                <MyMembership />
              </Suspense>
            ),
          },
          {
            path: "useful-tools",
            element: (
              <Suspense fallback={loader}>
                <UsefulTools />
              </Suspense>
            ),
          },
          {
            path: "user-profile",
            element: (
              <Suspense fallback={loader}>
                <UserProfile />
              </Suspense>
            ),
          },
          {
            path: "settings",
            element: (
              <Suspense fallback={loader}>
                <Settings />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <PublicRoute />,
    children: [
      {
        index: true,
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
    ],
  },
]);
