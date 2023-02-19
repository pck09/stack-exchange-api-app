import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Profile from "../features/profile/Profile";
import Search from "../features/search/Search";

export const router = createBrowserRouter([
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);
