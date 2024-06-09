import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { AuthProvider } from "./services/auth/AuthContext";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
