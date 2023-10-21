import * as React from "react";
import { Box } from "@mui/material";
import Page from "../Components/Page";

const themesong: React.FC = () => {
  return (
    <Page sectionId="Theme song">
      <h1>Theme song</h1>
      <iframe
        width="100%"
        height="60%"
        src="https://www.youtube.com/embed/ulforNn47PM"
        title="緑黄色社会『キャラクター』Official Video / Ryokuoushoku Shakai – Character"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Page>
  );
};

export default themesong;
