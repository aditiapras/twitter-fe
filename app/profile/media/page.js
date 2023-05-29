import UserTweet from "@/components/timeline/usrTweet";
import ProfNavbar from "@/components/navigation/profNavbar";
import UserProfile from "@/components/profile/userProfile";

export default function Media() {
  return (
    <>
      <UserProfile />
      <ProfNavbar />
      <UserTweet />
      <UserTweet />
      <UserTweet />
    </>
  );
}