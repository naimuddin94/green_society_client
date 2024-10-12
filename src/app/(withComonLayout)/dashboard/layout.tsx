import Sidebar from "@/components/ui/Sidebar";
import { IChildrenProps } from "@/types";

const layout = ({ children }: IChildrenProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="md:ml-64">{children}</div>
    </div>
  );
};

export default layout;
