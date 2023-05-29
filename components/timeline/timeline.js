import TimeNavbar from "../navigation/tNavbar";
import CreateTweets from "./createTweet";
import UserTweet from "./usrTweet";

export default function Timeline() {
  return (
    <>
      <section className="w-1/2 min-h-screen">
        {/* navigation home */}
        <TimeNavbar />
        {/* end of navigation home */}

        {/* start of create tweet form components */}
        {/* <CreateTweets /> */}
        {/* start of create tweet form components */}

        {/* start of peoples tweet */}
        {/* <UserTweet /> */}
        {/* end of peoples tweet */}
      </section>
    </>
  );
}
