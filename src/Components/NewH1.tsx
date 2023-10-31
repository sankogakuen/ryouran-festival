import * as React from "react";
import { Box, Typography } from "@mui/material";
import SlideInFadeInComponent from "../Components/SlideInFadeInComponent";

interface props {
  children: React.ReactNode;
}

const NewH1: React.FC<props> = ({ children }) => {
  const link: React.CSSProperties = {
    position: "relative",
    content: '""',
    left: "100", // 右端から線を出現させる
    width: "100", // 初期状態では幅0にする
    top: "0",
    height: 2,
    margin: 10,
    backgroundColor: "#808079",
  };

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <SlideInFadeInComponent>
        <Typography
          style={{
            fontFamily: "Nunito",
            fontWeight: "800",
          }}
          variant="h4"
        >
          {children}
        </Typography>
        <div style={link}></div>
      </SlideInFadeInComponent>
    </Box>
  );
};

export default NewH1;
