import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Header";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex-1">
        <Header />
        <div className="p-3 md:p-5 max-w-full overflow-x-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}