import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(transparent 95%, #00873F 5%),url("/trayectoria/banderAquitania.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        align="center"
        sx={{
          color: "#00873F",
          textAlign: "center",
          fontFamily: "ClementePDap",
          fontSize: { xs: "20px", sm: "48px" },
          fontStyle: "italic",
          fontWeight: 900,
          lineHeight: "normal",
          textShadow:
            "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
        }}
      >
        Te cuento un poco de mi vida
      </Typography>
      <Box
        sx={{ margin: "0 auto" }}
        component={"img"}
        src="/trayectoria/trayectoria.svg"
      />
    </Box>
  );
};

export default Banner;
