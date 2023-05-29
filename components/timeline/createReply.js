export default function CreateReply() {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div>
          <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
        </div>
        <textarea
          className="w-full bg-transparent outline-none border-none text-white resize-none px-3"
          placeholder="Tweet your reply!"
        ></textarea>
        <button className="px-4 h-10 bg-sky-500 hover:bg-sky-500/80 rounded-full text-white">
          Reply
        </button>
      </div>
    </>
  );
}
