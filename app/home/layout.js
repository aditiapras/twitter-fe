import Sidenav from "@/components/navigation/sidenav";
import Rightbar from "@/components/sidebar/rightbar";
import TimeNavbar from "@/components/navigation/tNavbar";
import CreateTweet from "@/components/timeline/createTweet";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900">
        <div className="lg:w-2/3 flex lg:mx-auto">
          <Sidenav />
          <div className="flex flex-col lg:w-1/2 min-h-screen">
            <TimeNavbar />
            {/* <CreateTweet /> */}
            {children}
          </div>
          <Rightbar />
        </div>
      </div>
    </>
  );
}
