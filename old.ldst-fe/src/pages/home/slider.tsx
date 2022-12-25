import { useEffect, useState } from "react";
import { MAIN_PAGE_IMAGES } from "../../data/images";
import Dots from "./dots";
import SliderContent from "./slider-content";
import "./slider.scss";

const len = MAIN_PAGE_IMAGES.length - 1;

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 200000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <section className="slider-container">
      <SliderContent activeIndex={activeIndex} content={MAIN_PAGE_IMAGES} />
      <Dots
        activeIndex={activeIndex}
        imageSlider={MAIN_PAGE_IMAGES}
        onclick={(activeIndex: any) => setActiveIndex(activeIndex)}
      />
    </section>
  );
}

export default ImageSlider;
