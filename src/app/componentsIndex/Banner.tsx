"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  backgorund,
  bannerFelipeCardozo,
  felipeCardozo,
  partidoVerde,
} from "./imgs";

const Banner = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const getPosition = () => {
      const container = document.getElementById("container imgs");
      const containerBottom: any =
        document.getElementById("containerImgBotoom");
      const containerIglesia = document.getElementById("containerIglesia");
      const imgFelipeCardozo = document.getElementById("felipeCardozo");

      if (container) {
        const positionContainerIglesia: any =
          containerIglesia?.getBoundingClientRect();
        const positionContainerBootomm =
          containerBottom.getBoundingClientRect();
        const position = container.getBoundingClientRect();
        const positionFelipeCardozo: any =
          imgFelipeCardozo?.getBoundingClientRect();
        const distance = Math.abs(
          position.bottom -
            (positionContainerBootomm.bottom -
              positionContainerBootomm.height * 0.04)
        );
        const distanceFelipeCardozo = Math.abs(
          positionContainerIglesia?.left - positionFelipeCardozo?.left
        );
        setDistance(distance);
        console.log(distance);
      }
    };
    getPosition();
  }, []);

  return (
    <Box>
      <Box
        id="container imgs"
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
        sx={{
          display: { md: "flex" },
          justifyContent: "space-around",
          background: {
            xs: `url("/backgroundResponsive.svg")`,
            md: "transparent",
          },
        }}
      >
        <Box
          sx={{
            alignSelf: "center",
            marginBottom: { xs: "37%", md: "10%", lg: "0" },
          }}
          width={{ xs: "100%", md: "50%" }}
        >
          <Box
            sx={{ margin: "0 auto", width: { xs: "70%", sm: "auto" } }}
            component={"img"}
            src={bannerFelipeCardozo}
          />
          <Typography
            sx={{
              color: "#08406A",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: { xs: "14px", md: "24px" },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            FIRMES POR AQUITANIA, FIRMES CON CHANO{" "}
          </Typography>
        </Box>
        <Box id="containerIglesia" width={"50%"}>
          <Box
            sx={{
              marginLeft: "auto",
              width: "100%",
              opacity: { xs: "0%", md: "100%" },
            }}
            component={"img"}
            src={backgorund}
          />
        </Box>
      </Box>
      <Box
        id="containerImgBotoom"
        sx={{
          background: "linear-gradient(transparent 80%, #00873F 25%)",
          display: "flex",
          justifyContent: "space-around",
          marginTop: `-${distance}px`,
          zIndex: "1",
          position: "relative",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          width={{ xs: "0%", md: "50%" }}
        >
          <Box
            sx={{
              marginTop: "auto",
              display: { xs: "none", md: "block" },
            }}
            component={"img"}
            src={partidoVerde}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          width={"60%"}
        >
          <Box
            sx={{ height: { xs: "70%", lg: "auto" }, marginTop: "auto" }}
            id="felipeCardozo"
            component={"img"}
            src={felipeCardozo}
          />
          <Box
            sx={{
              marginTop: "auto",
              display: { xs: "block", md: "none" },
              width: "50%",
              marginBottom: "3%",
            }}
            component={"img"}
            src={partidoVerde}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
