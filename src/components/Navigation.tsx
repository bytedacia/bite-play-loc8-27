import { SidebarTrigger } from "@/components/ui/sidebar";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex items-center">
        <SidebarTrigger className="text-white hover:text-brand-primary" />
      </div>
    </nav>
  );
};

export default Navigation;