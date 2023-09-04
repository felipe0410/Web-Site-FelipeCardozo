import { Box, Typography } from "@mui/material";

const Footer = () => {
  const socialRedes = [
    {
      red: "Facebook",
      logo: "/facebook.svg",
      text: "FELIPE CARDOZO ALCALDE 2024-2027",
      patch: "https://www.facebook.com/profile.php?id=100063929101466",
    },
    {
      red: "Whatsaap",
      logo: "/whatsaap.svg",
      text: "314 3594525",
      patch: "https://wa.me/573143594525",
    },
    {
      red: "tiktok",
      logo: "/tiktok.svg",
      text: "@felipeacardozo",
      patch:
        "https://www.tiktok.com/@felipeacardozo?is_from_webapp=1&sender_device=pc",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          background: 'url("/footerImg.svg")',
          padding: "5%",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{ marginBottom: "20%", placeContent: "center", display: "grid" }}
        >
          {socialRedes.map((red) => (
            <Box
              component={"a"}
              href={red.patch}
              target="_blank"
              sx={{ display: "flex", alignItems: "center", marginY: "10px" }}
              key={red.red}
            >
              <Box
                sx={{
                  width: { xs: "34px", md: "70px" },
                  padding:
                    red.text === "314 3594525"
                      ? { xs: "3px", md: "10px" }
                      : "0",
                }}
                component={"img"}
                src={red.logo}
              />
              <Typography
                sx={{
                  color: "#00873F",
                  fontFamily: "Inter",
                  fontSize: { xs: "14px", md: "24px" },
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                {red.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
