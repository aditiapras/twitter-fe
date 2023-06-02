"use client";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

export default function CreateReply() {
  const [option, setOption] = useState(false);
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="flex h-full">
          <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <h1 className={`${option ? "text-slate-500 text-sm" : "hidden"}`}>
            replying to <span className="text-sky-500">@aditiapras</span>
          </h1>
          <TextareaAutosize
            placeholder="Tweet your reply!"
            className="outline-none resize-none bg-transparent text-white text-xl w-full border-none"
            onClick={() => {
              setOption(true);
              console.log(option);
            }}
          />

          <div className={`flex justify-between items-center`}>
            <h1 className={`${option ? "text-white" : "hidden"}`}>icon</h1>
          </div>
        </div>
        <button className="px-4 h-10 bg-sky-500 hover:bg-sky-500/80 rounded-full text-white">
          Reply
        </button>
      </div>
    </>
  );
}
