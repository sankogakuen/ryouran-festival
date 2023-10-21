import * as React from "react";
import { Grid, Toolbar, Box } from "@mui/material";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    height: "100vh", // ブラウザの縦の高さ分の広さを確保
    width: "80%", // 幅を80%に設定
    background: "#0f0f0f0f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section id={sectionId}>
      <div style={containerStyle}>
        <Toolbar />
        <div style={item}>{children}</div>
      </div>
    </section>
  );
};

export default Page;
