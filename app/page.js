import Sidenav from "@/components/navigation/sidenav";

import Rightbar from "@/components/sidebar/rightbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="w-2/3 flex mx-auto">
        {/* navigation */}
        <Sidenav />
        {/* timeline */}
        {/* start of rightbars */}
        <Rightbar />
      </div>
    </div>
  );
}
