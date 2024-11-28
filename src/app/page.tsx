import Image from "next/image";
import FeedComponent from "./components/FeedComponent";
import StoryComponent from "./components/StoryComponent";

const Home = () => {
  return (
    <div>
      <div className="mb-5">
        <StoryComponent/>
      </div>
      <FeedComponent/>
    </div>
  )
};

export default Home;
