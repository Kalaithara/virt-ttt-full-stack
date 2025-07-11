import { useRoutes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Addition } from "./Addition";

export default function AppRouter() {
  return useRoutes([
    { path: "/", element: <Welcome name={"Kavi"} /> },
    { path: "/add", element: <Addition /> },
  ]);
}
