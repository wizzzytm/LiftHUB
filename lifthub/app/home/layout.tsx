import SideNav from "@/app/ui/home/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="childrendiv flex-grow p-6 md:overflow-y-auto md:p-10">
        {children}
      </div>
    </div>
  );
}
