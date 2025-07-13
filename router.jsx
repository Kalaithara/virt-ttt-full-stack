import { useRoutes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Addition } from "./Addition";
import Classcomponent from "./Classcomponent";
import Counter from "./Counterextension";
import UserCard from "./Usercard";
import InputLogger from "./Inputfield";
import LiveInputDisplay from "./Textinput";
import FruitList from "./Listoffruits";
import LoggerComponent from "./Logmsg";
import Button from "./Buttons";
import HoverButton from "./Buttons";

export default function AppRouter() {
  return useRoutes([
    { path: "/", element: <Welcome name={"Kavi"} /> },
    { path: "/add", element: <Addition /> },
    { path: "/class", element: <Classcomponent /> },
    { path: "/counter", element: <Counter /> },
    { path: "/usercard", element: <UserCard name="Kalai" age={30} /> },
    { path: "/inputlogger", element: <InputLogger /> },
    { path: "/liveinput", element: <LiveInputDisplay /> },
    {
      path: "/fruits",
      element: <FruitList fruits={["Apple", "Orange", "Cherry"]} />,
    },
    { path: "/logmsg", element: <LoggerComponent /> },
    { path: "/button", element: <Button /> },
    { path: "/hoverbutton", element: <HoverButton /> },
  ]);
}
