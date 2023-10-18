import * as React from "react";
import { Toolbar, Box } from "@mui/material";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
  const containerStyle: React.CSSProperties = {
    height: "100vh", // ブラウザの縦の高さ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const item: React.CSSProperties = {
    width: "80%", // 幅を80%に設定
  };
  return (
    <div style={containerStyle}>
      <div style={item}>
        <section id={sectionId}>
          <Toolbar />
          <Box height="60vh">{children}</Box>
        </section>
      </div>
    </div>
  );
};

export default Page;
