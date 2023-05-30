import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";

export default function ActionButton() {
  return (
    <div className="flex justify-between items-start px-10 py-1 border-b border-t border-slate-600">
      <div className="group flex w-10 h-10 rounded-full hover:bg-sky-900/40 items-center justify-center">
        <TbMessageCircle2 className="text-slate-500 group-hover:text-sky-500 text-xl"></TbMessageCircle2>
      </div>
      <div className="group flex w-10 h-10 rounded-full hover:bg-emerald-900/40 items-center justify-center">
        <AiOutlineRetweet className="text-slate-500 group-hover:text-emerald-500 text-xl"></AiOutlineRetweet>
      </div>
      <div className="group flex w-10 h-10 rounded-full hover:bg-pink-900/40 items-center justify-center">
        <HiOutlineHeart className="text-slate-500 group-hover:text-pink-500 text-xl"></HiOutlineHeart>
      </div>
      <div className="group flex w-10 h-10 rounded-full hover:bg-sky-900/40 items-center justify-center">
        <RiBookmarkLine className="text-slate-500 group-hover:text-sky-500 text-xl"></RiBookmarkLine>
      </div>
      <div className="group flex w-10 h-10 rounded-full hover:bg-sky-900/40 items-center justify-center">
        <FiShare className="text-slate-500 group-hover:text-sky-500 text-xl"></FiShare>
      </div>
    </div>
  );
}
