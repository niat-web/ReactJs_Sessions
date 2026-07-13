import { useEffect, useState } from "react";
import StoriesSlider from "../components/StoriesSlider";

const Home = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {

    const getStories = async () => {

      // API Call

      // setStories(responseData);

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