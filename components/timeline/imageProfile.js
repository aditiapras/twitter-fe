import Image from "next/image";
import profile from "/public/aditia.jpg";

export default function ImageProfile() {
  return (
    <div className="flex w-12 h-12 rounded-full bg-slate-600 overflow-hidden">
      <Image src={profile}></Image>
    </div>
  );
}
