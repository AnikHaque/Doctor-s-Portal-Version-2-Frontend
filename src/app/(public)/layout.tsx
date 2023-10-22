import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)]">{children}</div>
    </div>
  );
}
