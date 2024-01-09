import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "work", element: <WorkPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
