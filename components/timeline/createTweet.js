"use client";
import { BiImage } from "react-icons/bi";
import { RiFileGifLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import TextareaAutosize from "react-textarea-autosize";

export default function CreateTweets() {
  return (
    <>
      <div className="flex w-full gap-3 p-3 border-b border-slate-600">
        {/* profile picture */}
        <div>
          <div className="h-10 w-10 bg-white rounded-full"></div>
        </div>
        {/* end of profile picture */}

        {/* start of tweet section form */}
        <div className="flex flex-col gap-2 text-slate-500 w-full">
          <TextareaAutosize
            placeholder="What is happening?!"
            className="p-3 outline-none border-none focus:ring-0 resize-none bg-transparent text-white text-xl"
            onClick={() => {
              console.log("clicked");
            }}
          />
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3 items-center">
              <BiImage className="text-sky-500 text-xl"></BiImage>
              <RiFileGifLine className="text-sky-500 text-xl"></RiFileGifLine>
              <TbListDetails className="text-sky-500 text-xl"></TbListDetails>
              <BsEmojiSmile className="text-sky-500 text-xl"></BsEmojiSmile>
              <AiOutlineSchedule className="text-sky-500 text-xl"></AiOutlineSchedule>
              <IoLocationOutline className="text-sky-500 text-xl"></IoLocationOutline>
            </div>
            <button
              className="disabled:opacity-70 disabled:hover:bg-sky-500 bg-sky-500 hover:bg-sky-500/80 px-4 py-2 rounded-full text-white"
              disabled
            >
              Tweet
            </button>
          </div>
        </div>
        {/* end of tweet section form */}
      </div>
    </>
  );
}
