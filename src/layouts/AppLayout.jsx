import { Outlet } from "react-router-dom";
import { Navbar } from "../ui";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
