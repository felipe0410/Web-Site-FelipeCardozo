"use client";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CarouselComponent = () => {
  const slides = [
    "/carousel_Index/1.png",
    "/carousel_Index/2.png",
    "/carousel_Index/3.png",
    "/carousel_Index/4.png",
    "/carousel_Index/5.png",
    "/carousel_Index/6.png",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <Box
            sx={{ margin: "0 auto" }}
            component="img"
            src={slide}
            alt={`slide- ${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
