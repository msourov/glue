import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { AuthProvider } from "./services/auth/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
  });

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
