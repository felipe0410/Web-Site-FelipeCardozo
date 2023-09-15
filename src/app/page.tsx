"use client";
import { useEffect, useState } from "react";
import Banner from "./componentsIndex/Banner";
import Biography from "./componentsIndex/Biography";
import { Skeleton, Stack } from "@mui/material";


export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsComplete(true);
  }, [videoLoaded]);
  const loading = () => {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "60vh" }} />
        <Skeleton variant="rectangular" width={"100%"} height={"20vh"} />
        <Skeleton variant="rounded" width={"100%"} height={"40vh"} />
      </Stack>
    );
  };

  return (
    <main>
      {isComplete ? (
        <>
          {/* <Banner /> */}
          <Biography
            videoLoaded={videoLoaded}
            setVideoLoaded={setVideoLoaded}
          />
        </>
      ) : (
        loading()
      )}
    </main>
  );
}
