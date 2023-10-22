import DoctorHeader from "@/components/view/Header/DoctorHeader/DoctorHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar/DoctorSidebar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DoctorHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <div>
          <DoctorSidebar>{children}</DoctorSidebar>
        </div>
      </div>
    </div>
  );
}
