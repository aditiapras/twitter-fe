import { RiMoreFill } from "react-icons/ri";
import Link from "next/link";
import TweetActionButton from "./tweetActButton";
import ImageProfile from "./imageProfile";

export default function UserTweet() {
  return (
    <div className="flex w-full gap-3 p-3 text-white border-b border-slate-600">
      {/* profile ini jadi komponen avatar */}
      <div>
        <ImageProfile />
      </div>
      {/*  */}

      {/* tweet info */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h1 className="text-sm font-semibold hover:underline">
              Aditia Prasetian
            </h1>
            <h1 className="text-sm text-slate-600">@aditiapras</h1>
            <h1 className="text-sm text-slate-600 hover:underline">1h</h1>
          </div>
          <div className="flex items-center justify-center h-8 w-8 hover:bg-sky-900/20 rounded-full hover:text-sky-500 text-slate-500 cursor-pointer">
            <RiMoreFill></RiMoreFill>
          </div>
        </div>
        <div>
          <h1 className="text-sm">this is my first tweet!</h1>
        </div>
        {/*  */}

        {/* Action Button */}
        <div>
          <TweetActionButton />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
