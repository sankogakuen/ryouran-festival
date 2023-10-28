import * as React from "react";
import { Box } from "@mui/material";
import Page from "../Components/Page";
import NewH1 from "../Components/NewH1";

const themesong: React.FC = () => {
  return (
    <Page sectionId="Theme song">
      <Box height={"90vh"}>
        <NewH1>Theme song</NewH1>
        <iframe
          width="100%"
          height="50%"
          src="https://www.youtube.com/embed/ulforNn47PM"
          title="緑黄色社会『キャラクター』Official Video / Ryokuoushoku Shakai – Character"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Box>
    </Page>
  );
};

export default themesong;