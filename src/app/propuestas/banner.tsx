import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(transparent 94%, #00873F 6%),url("/back.svg")',
        padding: "5%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          marginBottom: { xs: "3%", sm: "-9%" },
          color: "#00873F",
          textAlign: "center",
          fontFamily: "ClementePDap",
          fontSize: { xs: "16px", sm: "48px" },
          fontStyle: "italic",
          fontWeight: 900,
          lineHeight: "normal",
          textShadow:
            "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
        }}
      >
        Nuestro proyecto: Soluciones firmes <br /> para Aquitania 2.0
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box component={"img"} src="/amaya.svg" />
        </Box>
        <Box
          sx={{
            height: "fit-content",
            alignSelf: "center",
            marginLeft: "auto",
            padding: { xs: "12px", sm: "5% 2%" },
            width: { xs: "55%", sm: "50%" },
            borderRadius: { xs: "10px", sm: "40px" },
            background: "rgba(0, 135, 63, 0.83)",
            boxshadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginBottom: { xs: "7%", sm: "0" },
          }}
        >
          <Typography
            sx={{
              paddingBottom: "5%",
              color: "#FFF",
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontFamily: "Inter",
              fontSize: { xs: "13px", sm: "40px" },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            VISION
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              textAlign: "justify",
              fontFamily: "Inter",
              fontSize: { xs: "9px", sm: "20px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Mi visión para Aquitania es convertirnos en un municipio ejemplar,
            donde todos los ciudadanos gocen de una alta calidad de vida,
            oportunidades justas y servicios públicos eficientes.
            Potencializaremos el turismo, promoviendo nuestra belleza natural y
            cultural, lo que a su vez generará empleos y desarrollo económico
            para nuestra comunidad. Quiero que Aquitania sea un lugar donde las
            generaciones futuras sientan orgullo de vivir, donde nuestros hijos
            tengan una educación de calidad, nuestros mayores vivan con dignidad
            y todos disfruten de un entorno limpio y seguro. Pero no puedo
            lograrlo solo. Necesito su apoyo, sus ideas y su participación
            activa. Juntos, podemos construir un futuro brillante para
            Aquitania. ¡Unámonos para hacer de nuestro municipio un lugar aún
            mejor para vivir!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
