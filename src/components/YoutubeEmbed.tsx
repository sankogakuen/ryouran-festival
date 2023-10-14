import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  YoutubeEmbedStyle: {
    width: "100%",
    height: "60vh",
  },
}));

const YoutubeEmbed = () => {
  const classes = useStyles();

  return (
    <iframe
      className={classes.YoutubeEmbedStyle}
      src="https://www.youtube.com/embed/ulforNn47PM"
      title="緑黄色社会『キャラクター』Official Video / Ryokuoushoku Shakai – Character"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};

export default YoutubeEmbed;
