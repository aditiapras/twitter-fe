import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

export default function UserProfile() {
  return (
    <div className="flex flex-col ">
      <div className="h-52 bg-gradient-to-br from-blue-600 via-amber-500 to-pink-700"></div>
      <div className="py-5 px-5">
        <div className="flex justify-between items-baseline -mt-24">
          <div className="w-32 h-32 bg-slate-600 rounded-full outline outline-4 outline-slate-900"></div>
          <button className="border px-4 py-1 rounded-full text-white hover:bg-slate-700">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-white font-semibold text-xl">
              Aditia Prasetian
            </h1>
            <h1 className="text-slate-600">@aditiapras</h1>
          </div>
          <div>
            <h1 className="text-white text-sm">this is my bio.</h1>
          </div>
          <div className="flex flex-wrap gap-5">
            <h1 className="text-slate-500 text-xs md:text-sm lg:text-sm">
              {" "}
              <span className="inline-flex items-baseline">
                <IoLocationOutline />
              </span>{" "}
              Bandung, Indonesia
            </h1>
            <h1 className="text-slate-500 text-xs md:text-sm lg:text-sm">
              {" "}
              <span className="inline-flex items-baseline">
                <IoIosLink />
              </span>{" "}
              <a
                href="https://aditiapras.dev"
                className="text-sky-500 hover:underline hover:underline-offset-1"
                target="blank"
              >
                aditiapras.dev
              </a>
            </h1>
            <h1 className="text-slate-500 text-xs md:text-sm lg:text-sm">
              {" "}
              <span className="inline-flex items-baseline">
                <IoCalendarOutline />
              </span>{" "}
              Joined Decemeber 2009
            </h1>
          </div>
          <div className="flex gap-5">
            <h1 className="text-white hover:underline :underline-offset-2 text-sm font-bold">
              200 <span className=" font-normal text-slate-500">Following</span>
            </h1>
            <h1 className="text-white hover:underline :underline-offset-2 text-sm font-bold">
              200 <span className=" font-normal text-slate-500">Followers</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
