"use client";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { FiShare } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { RiBookmarkFill } from "react-icons/ri";
import { TbPencilMinus } from "react-icons/tb";
import "flowbite";
import { useState } from "react";

export default function ActionButton() {
  const [like, setLike] = useState(false);
  const [retweet, setRetweet] = useState(false);
  const [book, setBook] = useState(false);

  return (
    <div className="flex justify-between items-start px-10 py-1 border-b border-t border-slate-600">
      <div className="group flex w-10 h-10 rounded-full hover:bg-sky-900/40 items-center justify-center">
        <TbMessageCircle2 className="text-slate-500 group-hover:text-sky-500 text-xl"></TbMessageCircle2>
      </div>
      <div className="flex flex-col justify-start items-end">
        <div
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
          className="group flex flex-col w-10 h-10 rounded-full hover:bg-emerald-900/20 items-center justify-center cursor-pointer"
        >
          {retweet ? (
            <AiOutlineRetweet className="text-emerald-500 group-hover:text-emerald-500 text-xl"></AiOutlineRetweet>
          ) : (
            <AiOutlineRetweet className="text-slate-500 group-hover:text-emerald-500 text-xl"></AiOutlineRetweet>
          )}

          {/* <AiOutlineRetweet className="text-slate-500 group-hover:text-emerald-500 text-xl"></AiOutlineRetweet> */}
        </div>
        <div
          id="dropdown"
          className={`z-10 hidden h-24 w-44 flex flex-col items-start justify-center py-1 bg-slate-900 border border-slate-500 rounded-xl`}
        >
          <h1
            className="text-white px-2 py-2 w-full flex items-center gap-2 hover:bg-slate-800"
            onClick={() => {
              setRetweet(!retweet);
            }}
          >
            <AiOutlineRetweet></AiOutlineRetweet>
            Retweet
          </h1>
          <h1 className="text-white px-2 py-2 w-full flex items-center gap-2 hover:bg-slate-800">
            <TbPencilMinus></TbPencilMinus>
            Quote Retweet
          </h1>
        </div>
      </div>

      <div
        className="group flex w-10 h-10 rounded-full hover:bg-pink-900/20 items-center justify-center cursor-pointer"
        onClick={() => {
          setLike(!like);
        }}
      >
        {/* jalankan modal dulu */}
        {like ? (
          <HiHeart className="text-pink-500 group-hover:text-pink-500 text-xl"></HiHeart>
        ) : (
          <HiOutlineHeart className="text-slate-500 group-hover:text-pink-500 text-xl"></HiOutlineHeart>
        )}
        {/* <HiOutlineHeart className="text-slate-500 group-hover:text-pink-500 text-xl"></HiOutlineHeart> */}
      </div>
      <div
        className="group flex w-10 h-10 rounded-full hover:bg-sky-900/20 items-center justify-center"
        onClick={() => {
          setBook(!book);
        }}
      >
        {book ? (
          <RiBookmarkFill className="text-sky-500 group-hover:text-sky-500 text-xl"></RiBookmarkFill>
        ) : (
          <RiBookmarkLine className="text-slate-500 group-hover:text-sky-500 text-xl"></RiBookmarkLine>
        )}
      </div>
      <div className="group flex w-10 h-10 rounded-full hover:bg-sky-900/40 items-center justify-center">
        <FiShare className="text-slate-500 group-hover:text-sky-500 text-xl"></FiShare>
      </div>
    </div>
  );
}
