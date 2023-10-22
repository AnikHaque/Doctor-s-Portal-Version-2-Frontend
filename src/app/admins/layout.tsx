import FooterComponent from "@/components/view/Footer/Footer";
import AdminHeader from "@/components/view/Header/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/view/Sidebar/AdminSidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <div className="min-h-[calc(100vh-64px)]">
          <AdminSidebar>{children}</AdminSidebar>
      </div>
    </div>
  );
}
