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
      img: "/carouselIndex/CENTRO DE INTEGRACION DEPORTIV.png",
    },
    {
      obra: "Coliseo San Juan de Mombita",
      description: "",
      img: "/carouselIndex/COLISEO SAN JUAN DE MOMBITA.png",
    },
    {
      obra: "Parque ecoturistico",
      description: "",
      img: "/carouselIndex/PARQUE ECOTURISTICO.png",
    },
    {
      obra: "Segundo piso casa de la cultura",
      description: "",
      img: "/carouselIndex/SEGUNDO PISO CASA CULTURAL.png",
    },
    {
      obra: "Adecuacion coliseo municipal",
      description: "",
      img: "/carouselIndex/adecuacion coliseo cubierto .png",
    },
    {
      obra: "Planta de tratamiento de aguas PTAR",
      description: "",
      img: "/carouselIndex/planta de tratamiento de aguas ptar.png",
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
        swipeable={true}
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
