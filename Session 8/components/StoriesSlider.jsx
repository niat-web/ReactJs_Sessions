import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
};

const StoriesSlider = ({ stories }) => {
  return (
    <Slider {...settings}>
      {stories.map((story) => (
        <div key={story.user_id}>
          <img
            src={story.story_url}
            alt={story.user_name}
          />
        </div>
      ))}
    </Slider>
  );
};

export default StoriesSlider;