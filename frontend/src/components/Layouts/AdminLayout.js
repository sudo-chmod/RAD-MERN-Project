import AdminNav from "../NavPanels/Admin/AdminNav";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  )
}