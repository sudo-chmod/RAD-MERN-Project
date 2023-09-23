import TeacherNav from "../NavPanels/TeacherNav";
import { Outlet } from "react-router-dom";

export default function TeacherLayout() {
  return (
    <div>
      <TeacherNav/>
      <Outlet />
    </div>
  )
}