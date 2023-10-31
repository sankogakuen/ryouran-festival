import * as React from "react";
import { Box } from "@mui/material";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
  return (
    <section id={sectionId}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth={"80%"}
        margin="0 auto" // 左右のマージンを自動調整して中央配置
        marginTop={"10%"}
        marginBottom={"10%"}
      >
        <Box>{children}</Box>
      </Box>
    </section>
  );
};

export default Page;
