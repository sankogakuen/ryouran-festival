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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ marginY: 4, height: "100vh" }}
        className="fadeIn"
      >
        <Box width="100%" maxWidth="100%" textAlign="center">
          <img src={Top_Title_Img} alt="画像の説明" style={{ width: "80%" }} />
          <div style={textStile}>
            <p>百花繚乱</p> <p>～みんなの個性咲き誇れ～</p>
          </div>
        </Box>
      </Grid>
    </section>
  );
};

export default Top;
