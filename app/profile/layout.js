import Sidenav from "@/components/navigation/sidenav";
import Rightbar from "@/components/sidebar/rightbar";
import ProfNavbar from "@/components/profile/profNavbar";
import UserProfile from "@/components/profile/userProfile";
import TimeNavbar from "@/components/timeline/tNavbar";

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900">
        <div className="w-2/3 flex mx-auto">
          <Sidenav />
          <div className="flex flex-col w-1/2 min-h-screen">
            <TimeNavbar />
            <UserProfile />
            <ProfNavbar />
            {children}
          </div>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
