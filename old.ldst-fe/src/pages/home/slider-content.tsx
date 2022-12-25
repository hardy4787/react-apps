import { ImageList, ImageListItem } from "@mui/material";
import { ImageGroup, SliderContentArgs } from "../../models";

function SliderContent({ activeIndex, content }: SliderContentArgs) {
  return (
    <>
      {content.map((slide: ImageGroup, index: number) => (
        <ImageList
          cols={3}
          key={slide.id}
          gap={0}
          className={index !== activeIndex ? "inactive" : ""}
        >
          {slide.images.map((i) => (
            <ImageListItem key={i.id}>
              <img src={i.path} alt={i.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      ))}
    </>
  );
}

export default SliderContent;
