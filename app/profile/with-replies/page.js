import UserTweet from "@/components/timeline/userTweet";
import ProfNavbar from "@/components/navigation/profNavbar";
import UserProfile from "@/components/profile/userProfile";

export default function WithReplies() {
  return (
    <>
      <UserProfile />
      <ProfNavbar />
      <UserTweet />
      <UserTweet />
    </>
  );
}
