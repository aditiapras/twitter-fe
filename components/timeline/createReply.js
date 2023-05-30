"use client";
import TextareaAutosize from "react-textarea-autosize";

export default function CreateReply() {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div>
          <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
        </div>
        <TextareaAutosize
          placeholder="Tweet your reply!"
          className="p-3 outline-none resize-none bg-transparent text-white text-xl w-full"
          onClick={() => {
            console.log("clicked");
          }}
        />
        <button className="px-4 h-10 bg-sky-500 hover:bg-sky-500/80 rounded-full text-white">
          Reply
        </button>
      </div>
    </>
  );
}
