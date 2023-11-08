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

const formattedText = (str: String) => {
  const formattedText = str.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index !== str.split("\n").length - 1 && <br />}{" "}
    </span>
  ));

  return formattedText;
};

const live: React.FC = () => {
  const liveTimeTable = `
日時：11/27（月）13:00 ~ 16:30 ※12:30開場

・「ダンス」「ファッションショー」「ショートムービー」ブロックによる発表
・「軽音」「ダンス」「e-sports」同好会による発表
・文化祭1日目の模擬店ブロック発表の表彰
観覧の申し込みは`;
  const liveTimeTable2 = `から（先着70組までとさせていただきます）。
中学校3年生一名につき保護者の方一名までご入場いただけます。
`;
  const textStile = {
    color: "#113946",
    fontSize: "100%",
    fontFamily: "Zen Kaku Gothic New",
    fontWeight: "800",
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
          {formattedText(liveTimeTable)}
          <a href="https://docs.google.com/forms/d/18tuY7R3bTg0z4oVLzkwEm4bN0sUuO0y1NluuveLmeAU/viewform?edit_requested=true">
            こちら
          </a>
          {formattedText(liveTimeTable2)}
        </Grid>
      </Grid>
    </Page>
  );
};

export default live;
