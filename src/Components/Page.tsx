import * as React from "react";
import { Grid, Toolbar, Box } from "@mui/material";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
  const containerStyle: React.CSSProperties = {
    minHeight: "50vh", // 最小の高さにブラウザの縦の高さ分の広さを確保
    maxHeight: "1000vh", // 最大の高さにブラウザの縦の高さ2つ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    height: "100vh", // ブラウザの縦の高さ分の広さを確保
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: "80%",
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
