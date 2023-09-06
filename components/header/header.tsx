"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log("%cpathname::>", "color:red", pathname);
  const sectionsHeader = [
    { name: "INICIO", patch: "/" },
    { name: "TRAYECTORIA", patch: "/trayectoria" },
    { name: "PROPUESTAS", patch: "/propuestas" },
  ];

  return (
    <Box
      id="header"
      width={"100%"}
      sx={{ background: "#00873F", padding: "14px" }}
    >
      <Box
        id={"headerContent"}
        display={"flex"}
        style={{ margin: "0 auto" }}
        sx={{
          alignItems: "center",
          marginRight: { xs: "0", lg: "5%" },
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        {sectionsHeader.map((section) => (
          <Box key={section.name}>
            <Button
              style={{
                background: section.patch === pathname ? "#003418" : "",
              }}
              sx={{
                borderRadius: "30px",
                boxShadow:
                  section.patch === pathname
                    ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                    : "",
                padding: { xs: "0px 10px", sm: "5px 20px" },
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: {
                    xs: "13px",
                    sm: "20px",
                    md: "25px",
                    lg: "30px",
                  },
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    lineHeight: "36px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  href={section.patch}
                >
                  {section.name}
                </Link>
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
