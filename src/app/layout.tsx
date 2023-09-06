"use client";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import Footer from "../../components/footer/footer";
import WhatsApp from "../../components/buttonWhatsaap/buttonWhatsaap";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Felipe Cardozo",
//   description: "Felipe Cardozo",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#fff" }} className={inter.className}>
      <body style={{ background: "#fff" }}>
        <Header />
        <Box>{children}</Box>
        <Box
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            background: "red",
          }}
        >
          <WhatsApp />
        </Box>
        <Footer />
      </body>
    </html>
  );
}
