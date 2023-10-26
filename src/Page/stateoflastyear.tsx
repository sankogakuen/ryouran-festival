import * as React from "react";
import { Box, Grid } from "@mui/material";

import SlideInImage from "../Components/SlideInImage";
import NewTextBox from "../Components/NewTextBox";
import NewH1 from "../Components/NewH1";
import Page from "../Components/Page";

import image1 from "../static/img/StateOfLastYear/image1.png";
import image2 from "../static/img/StateOfLastYear/image2.png";
import image4 from "../static/img/StateOfLastYear/image4.png";
import image5 from "../static/img/StateOfLastYear/image5.png";

const images = [image1, image2, image4, image5];

// styled-componentsを使用して下線スタイルを定義
const StateOfLastYear: React.FC = () => {
  const messageText = `
去年の文化祭の様子です。
`;
  const textStile = {
    fontSize: "100%",
    fontFamily: "M PLUS Rounded 1c",
    fontWeight: "500",
  };

  return (
    <Page sectionId="State of last year">
      <NewH1>State of last year</NewH1>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Box height="50%">
            <SlideInImage images={images} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={textStile}>{messageText}</div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default StateOfLastYear;
