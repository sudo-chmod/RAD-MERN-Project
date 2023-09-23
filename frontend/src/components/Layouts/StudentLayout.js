import StudentNav from "../NavPanels/StudentNav";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div>
      <StudentNav />
      <Outlet />
    </div>
  )
}