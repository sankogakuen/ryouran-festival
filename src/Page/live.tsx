import * as React from "react";
import SlideInImage from "../Components/SlideInImage";
import NewTextBox from "../Components/NewTextBox";
import NewH1 from "../Components/NewH1";
import { Toolbar, Box, Grid } from "@mui/material";
import Page from "../Components/Page";

import image1 from "../static/img/Live/image1.png";
import image2 from "../static/img/Live/image2.png";
import image3 from "../static/img/Live/image3.png";
import image4 from "../static/img/Live/image4.png";

const images = [image1, image2, image3, image4];

const live: React.FC = () => {
  const liveTimeTable = `
こちらの画像は去年に開催したライブの様子です。
日時：11月27日（月）13:00から15:30
内容：ファッションショー・ダンス・ショートムービー・kahoot大会など
`;

  const textStile = {
    fontSize: "100%",
    fontFamily: "Noto Serif JP",
    fontWeight: "800",
  };
  return (
    <Page sectionId="Live">
      <Box width="100%">
        <NewH1>Live</NewH1>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <SlideInImage images={images} />
        </Grid>
        <Grid item xs={12} sm={6} style={textStile}>
          <NewTextBox msgText={liveTimeTable}>...</NewTextBox>
        </Grid>
      </Grid>
    </Page>
  );
};
/*

 * */

export default live;
