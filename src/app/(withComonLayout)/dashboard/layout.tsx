import Sidebar from "@/components/ui/Sidebar";
import { ILayoutProps } from "@/types";

const layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="md:ml-64">{children}</div>
    </div>
  );
};

export default layout;
