import { SliderItemContent } from "./SliderItemContent";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  imgSrc: string;
  title: string;
  text: string;
  slug: string;
};

interface SliderProps {
  sliderItems: Slide[];
}

export function Slider({ sliderItems }: SliderProps) {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {sliderItems.map((item, index) => (
        <SwiperSlide key={index}>
          <SliderItemContent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
