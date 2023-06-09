import UserTweet from "@/components/timeline/userTweet";
import ProfNavbar from "@/components/navigation/profNavbar";
import UserProfile from "@/components/profile/userProfile";

export default function Profile() {
  return (
    <>
      <UserProfile />
      <ProfNavbar />
      <UserTweet />
    </>
  );
}
