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
      <section className="sticky top-0 bottom-0 flex flex-col lg:w-1/5 pb-4 pt-2 px-2 lg:px-4 border-r justify-between border-slate-600 max-h-screen">
        <div className="flex flex-col gap-3 mx-auto">
          <Link
            href="/home"
            className="flex rounded-full hover:bg-slate-800 items-center justify-center w-12 h-12 mx-auto lg:mx-0"
          >
            <BsTwitter className="text-3xl text-white"></BsTwitter>
          </Link>
          <Link
            href="/home"
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-32 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiHome7Fill className="text-white text-3xl"></RiHome7Fill>
            <h1 className="hidden lg:block text-white text-xl">Home</h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-36 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiHashtag className="text-white text-3xl"></RiHashtag>
            <h1 className="hidden lg:block text-white  text-xl">Explore</h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-52 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <IoNotificationsOutline className="text-white text-3xl"></IoNotificationsOutline>
            <h1 className="hidden lg:block text-white  text-xl">
              Notifications
            </h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-40 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiMailLine className="text-white text-3xl"></RiMailLine>
            <h1 className="hidden lg:block text-white  text-xl">Message</h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-32 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiFileListLine className="text-white text-3xl"></RiFileListLine>
            <h1 className="hidden lg:block text-white  text-xl">Lists</h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-44 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiBookmarkLine className="text-white text-3xl"></RiBookmarkLine>
            <h1 className="hidden lg:block text-white  text-xl">Bookmarks</h1>
          </Link>
          <Link
            href="/profile"
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-32 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <RiUserLine className="text-white text-3xl"></RiUserLine>
            <h1 className="hidden lg:block text-white  text-xl">Profile</h1>
          </Link>
          <Link
            href=""
            className="flex lg:gap-3 justify-center lg:justify-start items-center w-12 h-12 lg:w-32 lg:px-3 lg:py-2 rounded-full hover:bg-slate-800 mx-auto lg:mx-0"
          >
            <CgMoreO className="text-white text-3xl"></CgMoreO>
            <h1 className="hidden lg:block text-white  text-xl">More</h1>
          </Link>

          <button className="flex lg:px-3 lg:py-3 rounded-full bg-sky-500 hover:bg-sky-500/80 lg:w-full items-center justify-center w-14 h-14 text-white">
            Tweet
          </button>
        </div>
        <div className="flex flex-row lg:justify-between justify-center items-center py-2 hover:bg-slate-700 lg:px-3 rounded-full">
          <div className="flex gap-3 items-center">
            <h1 className="text-white w-10 h-10 bg-white rounded-full"></h1>
            <div className="flex flex-col hidden lg:block">
              <h1 className="text-white font-semibold">Aditia Prasetian</h1>
              <h1 className="text-slate-500 text-sm text-slate-400">
                @aditiapras
              </h1>
            </div>
          </div>
          <RiMoreFill className="text-white hidden lg:block"></RiMoreFill>
        </div>
      </section>
    </>
  );
}
