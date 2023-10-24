import * as React from "react";
import { Grid, Toolbar, Box } from "@mui/material";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // 最小の高さにブラウザの縦の高さ分の広さを確保
    maxHeight: "100vh", // 最大の高さにブラウザの縦の高さ2つ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    width: "80%", // 幅を80%に設定
    height: "90vh", // ブラウザの縦の高さ分の広さを確保
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
