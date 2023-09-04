"use client";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CarouselComponent = () => {
  const slides = [
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F1.svg?alt=media&token=1b6fdb16-a1da-4051-a028-07a2e33dfa0e",
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F2.svg?alt=media&token=3412e7fc-6fcc-4888-8677-3e5d57c0b86b",
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F3.svg?alt=media&token=9138b78e-87ae-497f-a977-b09fd60faa9b",
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F4.svg?alt=media&token=2def944c-9db4-408e-b949-865f595e19ea",
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F5.svg?alt=media&token=83cd24e1-6ebb-48f1-a63e-8889685217d3",
    "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/carouselIndex%2F6.svg?alt=media&token=671a5cd2-9c3a-4947-9ba5-40ffef988c18",
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
      //   customLeftArrow={<ArrowBackIosIcon sx={{transform: 'rotate(45deg)'}}/>}
      //   customRightArrow={<ArrowBackIosIcon />}
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
