import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const DoctorSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/doctor/dashboard" },
    { key: "2", label: "My Availability", href: "/doctor/my-availability" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default DoctorSidebar;
