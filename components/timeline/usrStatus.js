import { RiMoreFill } from "react-icons/ri";
import CreateReply from "./createReply";
import ActionButton from "./actionButton";

export default function UserStatus() {
  return (
    <>
      <div className="flex w-full gap-5 py-3 px-5 border-b border-slate-600">
        <div className="flex flex-col gap-3 w-full">
          {/* user info */}
          <div className="flex gap-3 w-full">
            <div>
              <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {/* start twitter name head */}
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h1 className="text-white text-sm hover:underline">
                    Aditia Prasetian
                  </h1>
                  <h1 className="text-slate-500 text-sm">@aditiapras</h1>
                </div>
                <div>
                  <RiMoreFill className="text-slate-500 h-7 w-7 rounded-full hover:bg-slate-700 hover:text-sky-500"></RiMoreFill>
                </div>
              </div>
              {/* end of twitter name head */}
            </div>
          </div>
          {/* end of user info */}

          {/* isi tweet */}
          <div className="flex flex-col gap-3 py-3">
            <h1 className="text-white">
              Kita pernah terpuruk, lalu bangkit lagi. Kita pernah susah, tapi
              tetap susah. Menyerahlah, siapa tau kita memang diciptakan untuk
              contoh buruk kehidupan-Heri Horeh.
            </h1>
            <h1 className="text-slate-500 hover:underline text-sm">
              5:52 PM · Feb 11, 2023
            </h1>
          </div>
          {/* end of isi tweet */}
          <ActionButton />
          <CreateReply />
        </div>
      </div>
    </>
  );
}
