import React from "react";
import Top_Title_Img from "../static/img/Top-title-img.png";
import { Grid, Box, Typography, Toolbar, Container } from "@mui/material";

const Top: React.FC = () => {
  const textStile = {
    fontSize: "100%",
    fontFamily: "Noto Serif JP",
    fontWeight: "800",
    alignItems: "center",
  };
  return (
    <section id="Home">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ marginY: 4, height: "100vh" }}
      >
        <Box width="100%" maxWidth="100%" textAlign="center">
          <img src={Top_Title_Img} alt="画像の説明" style={{ width: "80%" }} />
        </Box>
        <div style={textStile}>
          <Typography align="center" style={textStile}>
            百花繚乱
          </Typography>
          <Typography align="center" style={textStile}>
            ～みんなの個性咲き誇れ～
          </Typography>
        </div>
      </Grid>
    </section>
  );
};
export default Top;

{
  /*
      <Container fixed style={{ height: "100vh" }}></Container>

      <Grid container direction="column" alignItems="center" height="100vh">
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
*/
}
