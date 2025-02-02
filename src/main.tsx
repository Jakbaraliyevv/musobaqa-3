import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import root from "./root/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>
);
