import * as React from "react";
import Page from "../Components/Page";
import NewH1 from "../Components/NewH1";
import { Grid, Box } from "@mui/material";

const Date: React.FC = () => {
  return (
    <Page sectionId="Date">
      <NewH1>Date</NewH1>
      <div
        style={{
          fontFamily: "Noto Serif JP",
          width: "80vw",
        }}
      >
        <p>1日目</p>
        <p>2日目</p>
      </div>
    </Page>
  );
};

export default Date;
