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

export default function Sidenav() {
  return (
    <>
      <section className="flex flex-col w-1/4 pb-4 pr-4 border-r justify-between border-slate-600 min-h-screen">
        <div className="flex flex-col  gap-3">
          <Link
            href=""
            className="flex rounded-full hover:bg-slate-700 w-12 h-12 items-center justify-center"
          >
            <BsTwitter className="text-3xl text-white"></BsTwitter>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-32"
          >
            <RiHome7Fill className="text-white text-3xl"></RiHome7Fill>
            <h1 className="text-white text-xl">Home</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-36"
          >
            <RiHashtag className="text-white text-3xl"></RiHashtag>
            <h1 className="text-white  text-xl">Explore</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-52"
          >
            <IoNotificationsOutline className="text-white text-3xl"></IoNotificationsOutline>
            <h1 className="text-white  text-xl">Notifications</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-40"
          >
            <RiMailLine className="text-white text-3xl"></RiMailLine>
            <h1 className="text-white  text-xl">Message</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-32"
          >
            <RiFileListLine className="text-white text-3xl"></RiFileListLine>
            <h1 className="text-white  text-xl">Lists</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-44"
          >
            <RiBookmarkLine className="text-white text-3xl"></RiBookmarkLine>
            <h1 className="text-white  text-xl">Bookmarks</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-32"
          >
            <RiUserLine className="text-white text-3xl"></RiUserLine>
            <h1 className="text-white  text-xl">Profile</h1>
          </Link>
          <Link
            href=""
            className="flex gap-3 items-center px-3 py-2 rounded-full hover:bg-slate-700 w-32"
          >
            <CgMoreO className="text-white text-3xl"></CgMoreO>
            <h1 className="text-white  text-xl">More</h1>
          </Link>
          <Link
            href=""
            className="flex px-3 py-3 rounded-full bg-sky-500 hover:bg-sky-500/80 w-full items-center justify-center"
          >
            <button className="text-white">Tweet</button>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center py-2 hover:bg-slate-700 px-3 rounded-full">
          <div className="flex gap-3 items-center">
            <h1 className="text-white w-8 h-8 bg-white rounded-full"></h1>
            <div className="flex flex-col">
              <h1 className="text-white">Aditia Prasetian</h1>
              <h1 className="text-white text-sm text-slate-400">@aditiapras</h1>
            </div>
          </div>
          <RiMoreFill className="text-white"></RiMoreFill>
        </div>
      </section>
    </>
  );
}
