import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/global.css";
import { ErrorPage } from "./pages/errors";
import { CityPlaygrounds } from "./pages/city-playgrounds";
import { Home } from "./pages/home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/mui-theme";
import { CreatePlaygroundForm } from "./pages/create-playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cities/:cityId/sports/:sportId",
    element: <CityPlaygrounds />,
  },
  {
    path: "/create-playground",
    element: <CreatePlaygroundForm />,
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
