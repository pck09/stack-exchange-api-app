import { createBrowserRouter } from "react-router-dom";
import Profile from "../features/profile/Profile";
import Search from "../features/search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
