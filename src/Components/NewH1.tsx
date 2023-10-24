import * as React from "react";
import { Box } from "@mui/material";
import SlideInFadeInComponent from "../Components/SlideInFadeInComponent";

interface props {
  children: React.ReactNode;
}

const NewH1: React.FC<props> = ({ children }) => {
  const link: React.CSSProperties = {
    position: "relative",
    content: '""',
    left: "0", // 右端から線を出現させる
    top: -10,
    width: "100", // 初期状態では幅0にする
    height: 1,
    backgroundColor: "#000",
  };

  return (
    <Box width="100%">
      <SlideInFadeInComponent>
        <h1>{children}</h1>
        <div style={link}></div>
      </SlideInFadeInComponent>
    </Box>
  );
};

export default NewH1;
