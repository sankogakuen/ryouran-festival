import React from "react";
import Top_Title_Img from "../static/img/Top-title-img.png";
import { Grid, Box, Typography, Toolbar, Container } from "@mui/material";

const Top: React.FC = () => {
  const textStile = {
    fontSize: "100%",
    fontFamily: "Noto Serif JP",
    fontWeight: "800",
  };
  return (
    <section id="Home">
      <Box
        display="flex"
        flexDirection="column" // 縦に配置
        justifyContent="center"
        alignItems="center"
        minHeight="90vh" // 画面の高さいっぱいまで要素を広げる
        className="fadeIn"
      >
        <img src={Top_Title_Img} alt="画像の説明" style={{ width: "80%" }} />
        <Box style={textStile}>
          <p>百花繚乱</p>
          <p>～みんなの個性咲き誇れ～</p>
        </Box>
      </Box>
    </section>
  );
};

/*

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{
          marginY: 4,
          height: "100vh",
        }}
      >
        <Box width="100%" maxWidth="100%" textAlign="center">
        </Box>
        </Grid>
 */

export default Top;
