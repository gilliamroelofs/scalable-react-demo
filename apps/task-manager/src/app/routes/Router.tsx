import RootPage from "../pages/RootPage";
import {createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        lazy: async () => {
          const Page = (await import("../pages/TasksPage")).default;

          return {
            element: <Page />
          }
        },
      },
      {
        path: "*",
        lazy: async () => {
          const Page = (await import("../pages/NotFoundPage")).default;

          return {
            element: <Page />
          }
        },
      }
    ]
  },
]);

export default router;

