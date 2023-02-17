import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "antd/dist/reset.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
