import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShare } from "react-icons/fi";

export default function TweetActionButton() {
  return (
    <div className="flex gap-5 md:gap-10 lg:gap-10">
      {/* reply */}
      <div className="group flex gap-1 items-center cursor-pointer">
        <div className="h-8 w-8 group-hover:bg-sky-900/30 rounded-full flex items-center justify-center">
          <TbMessageCircle2 className="text-slate-500 group-hover:text-sky-500 text-lg"></TbMessageCircle2>
        </div>
        <p className="text-xs text-slate-500 group-hover:text-sky-500">10</p>
      </div>
      {/*  */}

      {/* retweet */}
      <div className="group flex gap-1 items-center cursor-pointer">
        <div className="h-8 w-8 group-hover:bg-emerald-900/30 rounded-full flex items-center justify-center">
          <AiOutlineRetweet className="text-slate-500 group-hover:text-emerald-500 text-lg"></AiOutlineRetweet>
        </div>
        <p className="text-xs text-slate-500 group-hover:text-emerald-500">
          10
        </p>
      </div>
      {/*  */}

      {/* like */}
      <div className="group flex gap-1 items-center cursor-pointer">
        <div className="h-8 w-8 group-hover:bg-pink-900/30 rounded-full flex items-center justify-center">
          <HiOutlineHeart className="text-slate-500 group-hover:text-pink-500 text-lg"></HiOutlineHeart>
        </div>
        <p className="text-xs text-slate-500 group-hover:text-pink-500">10</p>
      </div>
      {/*  */}

      {/* share */}
      <div className="group flex gap-1 items-center cursor-pointer">
        <div className="h-8 w-8 group-hover:bg-sky-900/30 rounded-full flex items-center justify-center">
          <FiShare className="text-slate-500 group-hover:text-sky-500 text-lg"></FiShare>
        </div>
        <p className="text-xs text-slate-500 group-hover:text-sky-500">10</p>
      </div>
      {/*  */}
    </div>
  );
}
