"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Trayectoria = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Box display={{ sm: "flex" }} sx={{ padding: "6%" }}>
      <Box width={{ sm: "50%" }} sx={{ paddingRight: { sm: "23px" } }}>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Inter",
            fontSize: { xs: "12px", sm: "20px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "justify",
          }}
        >
          Soy{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            Felipe Cardozo Montaña
          </span>{" "}
          , y quiero compartirte un poco de mi historia. Nací el 5 de enero de
          1975 en el Hospital San Luis de Aquitania. Desde muy joven, me dediqué
          a mis estudios y pasé por el Colegio Ramón Ignacio Avella hasta el
          grado octavo. Luego, completé mi bachillerato en un colegio militar en
          Bogotá, donde aprendí valiosas lecciones sobre disciplina,
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            responsabilidad y constancia
          </span>
          , además de importantes valores que aún guían mi vida.
          <br />
          <br />
          Después de graduarme, ingresé a la Universidad Santo Tomás de Bogotá y
          me convertí en{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            ingeniero civil
          </span>{" "}
          en el 2001. Durante mis años universitarios, ya me involucraba en la
          agricultura, específicamente en la comercialización de cebolla larga
          pelada. Una vez finalizados mis estudios, regresé a mi hermoso
          municipio para seguir trabajando en esta área de manera más profunda
          <br />
          <br />
          Mi experiencia en el mundo de la agricultura y la comercialización de
          cebolla me permitió conocer a fondo a los agricultores,
          transportadores y comerciantes. Además, tuve la oportunidad de
          trabajar como transportador y conducir camiones, llevando la cebolla
          de mi familia a abastos.
          <br />
          <br />
          Más adelante, asumí el rol de tesorero en la
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            Asociación de Agricultores y Transportadores de Aquitania (ASOATRA).
          </span>
          Durante ese tiempo, logramos alcanzar varias metas importantes, como
          la instalación del piso del salón social, que sigue siendo utilizado
          por la comunidad. Gracias a estos logros, fui nominado para ser
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            presidente de ASOATRA
          </span>{" "}
          , cargo que ocupé durante 6 años a partir del 2008. Durante mi
          presidencia, conseguimos construir el segundo piso, una sala de
          velación, oficinas y un auditorio en el tercer piso, además de
          realizar otras mejoras significativas.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: viewMore ? "none" : "flex", sm: "none" },
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => setViewMore(true)}
          sx={{
            color: "#08406A",
            textAlign: "justify",
            fontFamily: "ClementePDap",
            fontSize: "12px",
            fontStyle: "italic",
            fontWeight: 900,
            lineHeight: "normal",
            textTransform: "lowercase",
          }}
        >
          Leer más...
        </Button>
      </Box>
      <Box
        width={{ sm: "50%" }}
        sx={{
          marginTop: { xs: "20px", sm: "0" },
          paddingLeft: { sm: "23px" },
          display: { xs: viewMore ? "block" : "none", sm: "block" },
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Inter",
            fontSize: { xs: "12px", sm: "20px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "justify",
          }}
        >
          Me uní a la empresa{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            Libertadores
          </span>{" "}
          y, desde el segundo año, formé parte de la junta directiva. ¡Ya han
          pasado 15 años desde entonces! Durante mi tiempo en la junta, recibí
          una distinción especial que se otorgaba a quienes habían estado más
          tiempo en ella. A pesar de competir con personas con 20 o 30 años de
          experiencia, logré estar entre los cinco primeros, ¡y eso ocurrió
          cuando tenía solo 12 años en la empresa! Este logro significa mucho
          para mí.
          <br />
          <br />
          En 2016, además de ganar la{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            alcaldía de Aquitania
          </span>{" "}
          , también formé parte de la{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            junta directiva de Coflonorte
          </span>{" "}
          durante 4 años. Ambas funciones las desempeñé con excelentes
          resultados. Después de mi periodo como alcalde, fui nombrado{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            gerente de Coflonorte
          </span>{" "}
          durante 2 años, una etapa desafiante, especialmente debido a la
          pandemia que afectó| al mundo entero. A pesar de las dificultades,
          logramos sortear la situación, incluso cuando los ingresos del sector
          del transporte disminuyeron significativamente debido a la pandemia.
          Durante mi gestión, destacamos por la construcción de un centro de
          mantenimiento en la ciudad de Yopal. Este centro cuenta con 24
          habitaciones para los conductores, una cafetería, instalaciones de
          logística y mantenimiento, que incluyen lavaderos, cámaras de engrase
          y talleres de mecánica.
          <br />
          <br />
          Después de esos intensos pero exitosos dos años como gerente de
          Coflonorte, me desempeñe como{" "}
          <span style={{ color: "#00873F", fontWeight: 700 }}>
            gerente de Autoboy
          </span>{" "}
          . Sin embargo, debido a compromisos de tiempo relacionados con nuestra
          actual campaña, recientemete hice la entrega de este cargo.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: !viewMore ? "none" : "flex", sm: "none" },
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => setViewMore(false)}
          sx={{
            color: "#08406A",
            textAlign: "justify",
            fontFamily: "ClementePDap",
            fontSize: "12px",
            fontStyle: "italic",
            fontWeight: 900,
            lineHeight: "normal",
            textTransform: "lowercase",
          }}
        >
          Leer menos...
        </Button>
      </Box>
    </Box>
  );
};

export default Trayectoria;
