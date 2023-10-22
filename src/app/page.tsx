import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return (
    <div>
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)]"> </div>
    </div>
  );
}
