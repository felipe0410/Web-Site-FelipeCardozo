"use client";
import { Box, Typography, Button } from "@mui/material";
import CarouselComponent from "./carousel";
import { useEffect, useState } from "react";

const Biography = () => {
  const [heigth, setHeigth] = useState(0);
  const buttons = [
    {
      name: "aboutMe",
      text: "¿Quieres saber mas sobre mi? Da click aquí  ",
      patch: "/trayectoria",
    },
    {
      name: "myMayor",
      text: "Conoce mi gestion en la alcaldia de Aquitania 2016-2019",
      patch: "/trayectoria",
    },
  ];
  useEffect(() => {
    const getPosition = () => {
      const container = document.getElementById("myMayor");

      if (container) {
        const heigth = container.getBoundingClientRect();
        setHeigth(heigth.height);
      }
    };
    getPosition();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: 'url("/image.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            padding: "0%",
            paddingTop: { xs: "8%", md: "5%" },
            paddingLeft: { xs: "3.2%", md: "1.5%" },
            paddingRight: { xs: "4%", md: "1.8%" },
            paddingBottom: { xs: "1%", md: "0.8%" },
          }}
          width={{ xs: "50%", md: "27%" }}
        >
          <video
            style={{ borderRadius: "0 0 25px 25px" }}
            controls
            loop
            autoPlay={true}
          >
            <source src="/welcome.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "70%" },
            paddingRight: "60px",
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
            padding: "5%",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: { xs: "20px", md: "40px" },
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "normal",
            }}
          >
            Soy <span style={{ color: "#00873F" }}>Felipe cardozo</span>
          </Typography>
          <Typography
            sx={{
              marginTop: "8%",
              color: "#000",
              textAlign: "justify",
              fontFamily: "Inter",
              fontSize: { xs: "14px", md: "26px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Aunque algunos me conocen cariñosamente como{" "}
            <span style={{ color: "#00873F" }}>Chano</span> . Tuve el privilegio
            de nacer y crecer en nuestro hermoso municipio de Aquitania. A lo
            largo de mi vida, he encontrado mi propósito en el{" "}
            <span style={{ color: "#00873F" }}>
              servicio a nuestra comunidad
            </span>{" "}
            , tanto en el ámbito privado como en el público. Soy agricultor,
            empresario e ingeniero civil de profesion. En mi anterior gestión
            como alcalde, logramos llevar a cabo diversas obras con gran éxito,
            lo que nos llenó de satisfacción.
            <br />
            Hoy, me dirijo a ustedes con la firme convicción de continuar
            construyendo este proyecto político que tiene en su núcleo el sueño
            de convertir a Aquitania en un lugar aún mejor para todos nosotros.
            Para lograrlo, necesito de su valiosa{" "}
            <span style={{ color: "#00873F" }}>colaboración y apoyo </span> .
            Cuento con su confianza y compromiso para seguir adelante con esta
            misión que nos une. Juntos, podremos hacer de Aquitania un lugar
            donde todos podamos prosperar y disfrutar de una vida plena.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            {buttons.map((button) => (
              <Button
                sx={{
                  height: heigth === 0 ? "auto" : `${heigth}px`,
                  width: "45%",
                  padding: "10px",
                  borderRadius: "40px",
                  background: "#08406A",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                id={button.name}
                href={button.patch}
                key={button.name}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: { xs: "10px", md: "20px" },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                >
                  {button.text}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            width: "90%",
            margin: "3% auto",
            color: "#00873F",
            textAlign: "center",
            fontFamily: "ClementePDap",
            fontSize: { xs: "20px", md: "48px" },
            fontStyle: "italic",
            fontWeight: 900,
            lineHeight: "normal",
            marginBottom: "50px",
          }}
        >
          Construyendo este proyecto junto a ustedes
        </Typography>
        <Box
          sx={{
            marginBottom: "50px",
            width: { xs: "90%", md: "auto" },
            margin: "0 auto",
          }}
          id="carousel"
        >
          <CarouselComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default Biography;
