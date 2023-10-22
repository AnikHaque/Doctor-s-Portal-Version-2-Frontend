import { authOptions } from "@/app/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const DoctorDashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return <div>DoctorDashboard</div>;
};

export default DoctorDashboard;
