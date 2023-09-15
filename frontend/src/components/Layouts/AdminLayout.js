import AdminNav from "../NavPanels/AdminNav";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  )
}