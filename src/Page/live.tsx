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
日時：11月27日（月）13:00から15:30
内容：ファッションショー・ダンス・ショートムービー・kahoot大会など
(こちらの画像は去年に開催したライブの様子です)
`;
  const formattedText = liveTimeTable.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index !== liveTimeTable.split("\n").length - 1 && <br />}{" "}
    </span>
  ));

  const textStile = {
    color: "#113946",
    fontSize: "100%",
    fontFamily: "M PLUS Rounded 1c",
  };
  return (
    <Page sectionId="Live">
      <NewH1>Live</NewH1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box height="50%">
            <SlideInImage images={images} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={textStile}>
          <div style={textStile}>{formattedText}</div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default live;
