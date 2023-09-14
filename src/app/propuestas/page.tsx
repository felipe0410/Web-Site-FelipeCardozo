import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Banner from "./banner";
import { arrayPropuestas1, arrayPropuestas2 } from "./arraysPropuestas";
interface Propuestas {
  title: string;
  img: string;
  description: string;
}
const Index = () => {
  const propuestasRender = (array: Propuestas[], rowReverse: boolean) => {
    return (
      <Box>
        {array.map((element: Propuestas, index) => (
          <Box
            sx={{
              display: "flex",
              marginY: "30px",
              flexDirection: rowReverse
                ? { xs: "row", sm: "row-reverse" }
                : "row",
            }}
            key={element.title}
          >
            <Box width={"30%"}>
              <Box component={"img"} src={element.img} />
            </Box>
            <Box width={"100%"} sx={{ marginX: "20px" }}>
              <Typography
                sx={{
                  textAlignLast: "center",
                  color: "#025F2D",
                  textAlign: "justify",
                  fontFamily: "Inter",
                  fontSize: { xs: "10px", sm: "20px" },
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                }}
              >
                {element.title}
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  color: "#000",
                  textAlign: "justify",
                  fontFamily: "Inter",
                  fontSize: { xs: "10px", sm: "20px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {element.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Banner />
      <Box marginY={"5%"}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#00873F",
            fontFamily: "ClementePDap",
            fontSize: { xs: "16px", sm: "48px" },
            fontStyle: "italic",
            fontWeight: 900,
            lineHeight: "normal",
            textShadow:
              "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
          }}
        >
          MISION
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            borderRadius: { xs: "10px", sm: "40px" },
            background: "rgba(0, 135, 63, 0.83)",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "3% 5%",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "ClementePDai",
              fontSize: { xs: "12px", sm: "32px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Mi misión como alcalde de Aquitania es trabajar incansablemente para
            generar mejores oportunidades para todos los ciudadanos. Quiero que
            cada habitante de nuestro municipio tenga acceso a un empleo digno y
            a un futuro lleno de promesas. Para lograrlo, me comprometo a:
          </Typography>
        </Box>
        <Box
          display={{ sm: "flex" }}
          sx={{ textAlign: "-webkit-center", marginY: "5%" }}
        >
          <Box>
            <Box width={"90%"} sx={{ maxWidth: "100%" }}>
              {propuestasRender(arrayPropuestas1, false)}
            </Box>
          </Box>
          <Box>
            <Box width={"90%"} sx={{ maxWidth: "100%" }}>
              {propuestasRender(arrayPropuestas2, true)}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
