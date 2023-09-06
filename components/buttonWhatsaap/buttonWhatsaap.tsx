import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+573143594525"
      accountName={"Felipe Cardozo"}
      avatar={
        "https://firebasestorage.googleapis.com/v0/b/felipecardozo-ed518.appspot.com/o/felipeCardozo.svg?alt=media&token=093fee20-0253-4481-900c-d2d63741e8f5"
      }
      statusMessage={"Alcalde 2024-2027"}
      chatMessage={
        "¡Hola! 👋 Soy Felipe Cardozo, contactame y construyamos un Aquitania mejor 🏡🌟"
      }
      darkMode={true}
    />
  );
};

export default WhatsApp;
