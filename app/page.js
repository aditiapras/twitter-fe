import Sidenav from "@/components/navigation/sidenav";
import Timeline from "@/components/timeline/timeline";
import Rightbar from "@/components/sidebar/rightbar";
import TimeNavbar from "@/components/timeline/tNavbar";
import CreateTweets from "@/components/timeline/createTweet";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="w-2/3 flex mx-auto">
        {/* navigation */}
        <Sidenav />
        {/* timeline */}
        <Timeline />
        {/* start of rightbars */}
        <Rightbar />
      </div>
    </div>
  );
}
