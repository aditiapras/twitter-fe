import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { RiHashtag } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiMoreFill } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidenav from "@/components/sidenav";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="w-2/3 flex justify-center mx-auto">
        <Sidenav />
        <section className="w-1/2">
          <h1>Timeline</h1>
        </section>
        <section className="flex flex-col w-1/4 pt-2 border-l border-slate-600 min-h-screen">
          <h1>Timeline</h1>
        </section>
      </div>
    </div>
  );
}
