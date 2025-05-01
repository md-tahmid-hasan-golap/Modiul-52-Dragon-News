import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <h2>autherntication Layout</h2>,
  },
  {
    path: "/News",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Erroe404</h2>,
  },
]);

export default router;
