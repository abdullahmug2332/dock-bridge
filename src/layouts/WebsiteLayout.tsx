import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLayout() {
  return (
    <div className=" max-w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
