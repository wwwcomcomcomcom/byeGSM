import { Outlet } from "react-router-dom";
import Navigation from "./ui/navigation";

export default function NavigationLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
