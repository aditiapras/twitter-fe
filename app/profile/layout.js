import Sidenav from "@/components/navigation/sidenav";
import Rightbar from "@/components/sidebar/rightbar";
import TimeNavbar from "@/components/navigation/tNavbar";

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900">
        <div className="md:w-4/5 lg:w-2/3 flex md:mx-auto lg:mx-auto md:border-r md:border-slate-600">
          <Sidenav />
          <div className="flex flex-col w-full lg:w-1/2 min-h-screen">
            <TimeNavbar />
            {children}
          </div>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
