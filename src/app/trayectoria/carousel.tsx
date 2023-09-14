"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CarouselComponent = () => {
  const obras = [
    {
      obra: "Piscina municipal",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/CENTRO%20DE%20INTEGRACION%20DEPORTIV.svg?alt=media&token=36580ced-612d-4b2e-b9f8-363dd4e9a81a",
    },
    {
      obra: "Coliseo San Juan de Mombita",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/COLISEO%20SAN%20JUAN%20DE%20MOMBITA.svg?alt=media&token=10bdafa9-1a50-4a01-85f5-d8b6eea96209",
    },
    {
      obra: "Parque ecoturistico",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/PARQUE%20ECOTURISTICO.svg?alt=media&token=5db4c164-4d1f-4356-9fd3-09233051cec8",
    },
    {
      obra: "Segundo piso casa de la cultura",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/SEGUNDO%20PISO%20CASA%20CULTURAL.svg?alt=media&token=f6fdc4bc-cf9d-4e9b-979d-8c188551b8cd",
    },
    {
      obra: "Adecuacion coliseo municipal",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/adecuacion%20coliseo%20cubierto.svg?alt=media&token=21198450-5726-479d-8c1e-2861f5e02c42",
    },
    {
      obra: "Planta de tratamiento de aguas PTAR",
      description: "",
      img: "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/planta%20de%20tratamiento%20de%20aguas%20ptar.svg?alt=media&token=1a0e2bf0-2410-459a-801f-748a5ace1a9d",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box>
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
        {obras.map((slide, index) => (
          <div id={slide.obra} key={index}>
            <Typography
              align="center"
              sx={{
                paddingY: "3%",
                textAlignLast: "center",
                color: "#FFF",
                textAlign: "justify",
                fontFamily: "ClementePDap",
                fontSize: { xs: "20px", sm: "48px" },
                fontStyle: "italic",
                fontWeight: 900,
                lineHeight: "normal",
              }}
            >
              {slide.obra}
            </Typography>
            <Box
              sx={{ margin: "0 auto" }}
              component="img"
              src={slide.img}
              alt={`slide- ${index}`}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;