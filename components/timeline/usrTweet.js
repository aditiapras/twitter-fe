import { RiMoreFill } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import Link from "next/link";

export default function UserTweet() {
  return (
    <>
      <div className="flex w-full gap-5 p-3 border-b border-slate-600 hover:bg-slate-800/70">
        {/* start of tweet container */}
        <div className="flex gap-3 w-full">
          <div>
            <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {/* start twitter name head */}
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2">
                <h1 className="text-white text-sm hover:underline">
                  Aditia Prasetian
                </h1>
                <h1 className="text-slate-500 text-sm">@aditiapras</h1>
                <h1 className="text-slate-500 text-sm">1h</h1>
              </div>
              <div>
                <RiMoreFill className="text-slate-500 h-7 w-7 rounded-full hover:bg-slate-700 hover:text-sky-500"></RiMoreFill>
              </div>
            </div>
            {/* end of twitter name head */}
            <Link href="/profile/status/123" className="w-full">
              <div>
                <h1 className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat error nulla iure, voluptates vel non vero laboriosam
                  asperiores eligendi, alias saepe assumenda quos in et iste
                  laudantium pariatur quo? Quidem maiores sed facilis eius, iste
                  exercitationem modi. Vel, illo perferendis libero possimus
                  facilis necessitatibus odio recusandae, sequi harum minus
                  totam maxime at fugiat quidem eaque excepturi ducimus sunt
                  aliquam dolorem. Totam eum id officia reiciendis placeat ipsa
                  earum a fugiat?
                </h1>
              </div>
            </Link>
            {/* end of tweet container */}

            {/* start of tweet action button */}
            <div className="flex w-full gap-16 items-center">
              {/* reply component */}
              <div className="group flex gap-2 items-center">
                <div className="flex w-8 h-8 rounded-full group-hover:bg-slate-700 items-center justify-center">
                  <TbMessageCircle2 className="text-slate-500 group-hover:text-sky-500"></TbMessageCircle2>
                </div>
                <div className="text-xs">
                  <h1 className="text-slate-500 group-hover:text-sky-500">
                    100
                  </h1>
                </div>
              </div>
              {/* end of reply component */}

              {/* retweet component */}
              <div className="group flex gap-2 items-center">
                <div className="flex w-8 h-8 rounded-full group-hover:bg-slate-700 items-center justify-center">
                  <AiOutlineRetweet className="text-slate-500 group-hover:text-emerald-500"></AiOutlineRetweet>
                </div>
                <div className="text-xs">
                  <h1 className="text-slate-500 group-hover:text-emerald-500">
                    37
                  </h1>
                </div>
              </div>
              {/* end of retweet component */}

              {/* like component */}
              <div className="group flex gap-2 items-center">
                <div className="flex w-8 h-8 rounded-full group-hover:bg-slate-700 items-center justify-center">
                  <HiOutlineHeart className="text-slate-500 group-hover:text-pink-500"></HiOutlineHeart>
                </div>
                <div className="text-xs">
                  <h1 className="text-slate-500 group-hover:text-pink-500">
                    100
                  </h1>
                </div>
              </div>
              {/* end of like component */}

              {/* share component */}
              <div className="group flex gap-2 items-center">
                <div className="flex w-8 h-8 rounded-full group-hover:bg-slate-700 items-center justify-center">
                  <FiShare className="text-slate-500 group-hover:text-sky-500"></FiShare>
                </div>
              </div>
              {/* end of share component */}
            </div>
            {/* end of tweet action button */}
          </div>
          {/* end of tweet container */}
        </div>
      </div>
    </>
  );
}
