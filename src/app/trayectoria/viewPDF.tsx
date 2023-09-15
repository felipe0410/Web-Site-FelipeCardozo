import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState(1000);
  const [heigth, setHeigth] = useState(1000);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function goToPreviousPage(): void {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage(): void {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      const positionContainerBootomm = container.getBoundingClientRect();
      setWidth(positionContainerBootomm.width * 0.8);
      setHeigth(positionContainerBootomm.height);
    }
  }, []);

  return (
    <div
      id="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
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
        REVISTA GESTION 2016-2019
      </Typography>
      <Document
        file={"/gestion 2016-2019 .pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          width={width}
          height={heigth}
          renderTextLayer={false}
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
        />
      </Document>
      
      <Box sx={{ marginBottom: "10px", display: "flex" }}>
        <Button
          style={{
            background: pageNumber === 1 ? "#80808063" : "#00873F",
            marginRight: "7%",
          }}
          variant="contained"
          onClick={goToPreviousPage}
          disabled={pageNumber === 1}
        >
          Anterior
        </Button>
        <Button
          style={{
            background: pageNumber === numPages ? "#80808063" : "#00873F",
          }}
          variant="contained"
          onClick={goToNextPage}
          disabled={pageNumber === numPages}
        >
          Siguiente
        </Button>
      </Box>
      <Typography style={{ color: "#000", fontSize: "20px" }}>
        Página {pageNumber} de {numPages}
      </Typography>
    </div>
  );
}

export default PDFViewer;
