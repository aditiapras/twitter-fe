import Link from "next/link";

import Sidenav from "@/components/sidenav";
import { RiMoreFill } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShare } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="w-2/3 flex mx-auto">
        <Sidenav />
        <section className="w-1/2 min-h-screen">
          {/* navigation home */}
          <div className="sticky top-0 p-3 h-24 border-b border-slate-600 bg-slate-900/70 backdrop-blur-md">
            <h1 className="text-white text-xl">Home</h1>
          </div>
          {/* end of navigation home */}

          {/* start of tweet form components */}
          <div className="flex w-full gap-3 p-3 border-b border-slate-600">
            {/* profile picture */}
            <div className="h-10 w-10 bg-white rounded-full"></div>
            {/* end of profile picture */}

            {/* start of tweet section form */}
            <div className="flex flex-col gap-2 text-slate-500 w-full">
              <textarea
                placeholder="whats happening"
                className="outline-none border-none bg-transparent text-white"
              ></textarea>
              <div className="flex w-full justify-between items-center">
                <h1>icon</h1>
                <button className="bg-sky-500 hover:bg-sky-500/80 px-4 py-2 rounded-full text-white">
                  tweet
                </button>
              </div>
            </div>
            {/* end of tweet section form */}
          </div>
          {/* start of tweet form components */}

          {/* start of peoples tweet */}
          <div className="flex w-full gap-5 p-3 border-b border-slate-600 hover:bg-slate-800/70">
            <div className="flex gap-3 w-full">
              <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
              {/* start of tweet container */}
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
                <div>
                  <h1 className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat error nulla iure, voluptates vel non vero laboriosam
                    asperiores eligendi, alias saepe assumenda quos in et iste
                    laudantium pariatur quo? Quidem maiores sed facilis eius,
                    iste exercitationem modi. Vel, illo perferendis libero
                    possimus facilis necessitatibus odio recusandae, sequi harum
                    minus totam maxime at fugiat quidem eaque excepturi ducimus
                    sunt aliquam dolorem. Totam eum id officia reiciendis
                    placeat ipsa earum a fugiat?
                  </h1>
                </div>
                {/* end of tweet container */}

                {/* start of tweet action button */}
                <div className="flex gap-16 items-center">
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
          {/* end of peoples tweet */}
        </section>
        {/*  */}
        <section className="flex flex-col pl-4 border-l  border-slate-600 w-1/4 gap-5">
          <div className="sticky top-0 flex h-14 w-full bg-slate-900">
            <input
              type="text"
              className="bg-slate-600 mt-2 mb-2 rounded-full outline-none border-none text-white py-2 px-5"
              placeholder="Search Twitter"
            />
          </div>
          <div className="bg-slate-800 rounded-xl w-full p-3 flex flex-col gap-5">
            <h1 className="text-xl font-bold text-white">Trends for you</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
            <h1 className="text-white">Card</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
