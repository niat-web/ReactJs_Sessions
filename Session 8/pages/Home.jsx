import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import StoriesSlider from "../components/StoriesSlider";

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const jwtToken = Cookies.get("jwt_token");

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await fetch(
        "https://apis.ccbp.in/insta-share/stories",
        options
      );

      const data = await response.json();

      if (response.ok) {
        const updatedStories = data.users_stories.map((story) => ({
          user_id: story.user_id,
          user_name: story.user_name,
          story_url: story.story_url,
        }));

        setStories(updatedStories);
      }
    };

    getStories();
  }, []);

  return (
    <div>
      <StoriesSlider stories={stories} />
    </div>
  );
};

export default Home;