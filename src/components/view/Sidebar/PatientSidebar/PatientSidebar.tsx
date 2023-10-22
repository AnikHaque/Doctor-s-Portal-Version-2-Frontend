import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const PatientSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/dashboard" },
    { key: "2", label: "Available Services", href: "/available-services" },
    { key: "3", label: "Available Doctors", href: "/available-doctors" },
    { key: "4", label: "My Appointments", href: "/my-appointments" },
    { key: "5", label: "Payment History", href: "/payment-history" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default PatientSidebar;
