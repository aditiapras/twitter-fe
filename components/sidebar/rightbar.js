import { RiMoreFill } from "react-icons/ri";
export default function Rightbar() {
  return (
    <>
      <section className="flex flex-col pl-4 pb-4 border-l  border-slate-600 w-1/4 gap-5">
        {/* search bar */}
        <div className="sticky top-0 flex h-14 w-full bg-slate-900">
          <input
            type="text"
            className="bg-slate-600 mt-2 mb-2 rounded-full outline-none w-full border-none text-white py-2 px-5"
            placeholder="Search Twitter"
          />
        </div>
        {/* end of search bar */}

        {/* Trending */}
        <div className="bg-slate-800 rounded-xl w-full py-3 flex flex-col gap-5">
          <div className="px-5">
            <h1 className="text-xl font-bold text-white">Trends for you</h1>
          </div>
          <div className="flex flex-col gap-1 w-full px-5 py-2 hover:bg-slate-700">
            <div className="flex justify-between items-center">
              <h1 className="text-slate-500 text-sm">Sports Trending</h1>
              <div className="group flex items-center justify-center h-6 w-6  hover:bg-slate-600 rounded-full">
                <RiMoreFill className="text-slate-500 text-normal group-hover:text-sky-500"></RiMoreFill>
              </div>
            </div>
            <div>
              <h1 className="text-white text-sm font-bold">
                Indonesia vs Argentina
              </h1>
            </div>
          </div>
        </div>
        {/* end of trending */}
        {/* follow suggestion */}
        <div className="bg-slate-800 rounded-xl w-full py-3 flex flex-col gap-5">
          <div className="px-5">
            <h1 className="text-xl font-bold text-white">Who to follow</h1>
          </div>
          <div className="flex flex-col gap-1 w-full px-5 py-2 hover:bg-slate-700">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                <div className="flex flex-col ">
                  <h1 className="text-white text-sm hover:underline font-semibold">
                    Aditia Prasetian
                  </h1>
                  <h1 className="text-slate-500 text-sm">@aditiapras</h1>
                </div>
              </div>
              <div>
                <button className="bg-white hover:bg-slate-200 px-5 py-2 rounded-full">
                  <h1 className="text-sm">follow</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
