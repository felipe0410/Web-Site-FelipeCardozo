"use client";
import { Box, Typography, Button } from "@mui/material";
import Banner from "./Banner";
import Trayectoria from "./trayectoria";
import CarouselComponent from "./carousel";
import PDFViewer from "./viewPDF";

const Index = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1GkOinwkWup7IifdpK5vE8yeSjbJ8zYWR/view";

  return (
    <Box>
      <Banner />
      <Trayectoria />
      <Box
        id="gestion"
        sx={{
          background: "#08406A",
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <CarouselComponent />
      </Box>
      <Button
        style={{ background: "#00873F", margin: "10% auto", display: "flex" }}
        sx={{
          padding: { xs: "5px 10px", sm: "15px 30px" },
          borderRadius: "40px",
          backgroundColor: "#00873F",
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "#FFF",
          fontFamily: "ClementePDap",
          fontSize: { xs: "12px", sm: "32px" },
          fontStyle: "italic",
          fontWeight: 900,
          lineHeight: "normal",
        }}
      >
        <a href={pdfUrl} download target="_blank">
          Descarga mi gestion completa aqui
        </a>
        <Box>
          <Box
            sx={{
              width: { xs: "50%", sm: "auto" },
              marginLeft: { xs: "5px", sm: "15px" },
            }}
            component={"img"}
            src="/click.svg"
          />
        </Box>
      </Button>
      <PDFViewer />
    </Box>
  );
};

export default Index;
