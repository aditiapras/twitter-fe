import Link from "next/link";

export default function ProfNavbar() {
  return (
    <div className="flex justify-between items-center h-12 border-b border-slate-600">
      <Link
        href="/profile"
        className="flex items-center justify-center h-full w-1/4 hover:bg-slate-800"
      >
        <h1 className="text-white">Tweets</h1>
      </Link>
      <Link
        href="/profile/with-replies"
        className="flex items-center justify-center h-full w-1/4 hover:bg-slate-800"
      >
        <h1 className="text-slate-500">Replies</h1>
      </Link>
      <Link
        href="/profile/media"
        className="flex items-center justify-center h-full w-1/4 hover:bg-slate-800"
      >
        <h1 className="text-slate-500">Media</h1>
      </Link>
      <Link
        href="/profile/likes"
        className="flex items-center justify-center h-full w-1/4 hover:bg-slate-800"
      >
        <h1 className="text-slate-500">Likes</h1>
      </Link>
    </div>
  );
}
