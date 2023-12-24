import { Outlet } from "react-router-dom";
import { Navbar } from "../ui";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
