import * as React from "react";
import SlideInImage from "../Components/SlideInImage";
import NewTextBox from "../Components/NewTextBox";
import NewH1 from "../Components/NewH1";
import { Toolbar, Box, Grid } from "@mui/material";

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

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // 最小の高さにブラウザの縦の高さ分の広さを確保
    maxHeight: "200vh", // 最大の高さにブラウザの縦の高さ2つ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    maxHeight: "200vh", // ブラウザの縦の高さ分の広さを確保
    width: "80%", // 幅を80%に設定
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const underLine: React.CSSProperties = {
    position: "relative",
    content: '""',
    left: "0", // 右端から線を出現させる
    top: -10,
    width: "100", // 初期状態では幅0にする
    height: 1,
    backgroundColor: "#000",
  };

  return (
    <section id="Live">
      <div style={containerStyle}>
        <Toolbar />
        <div style={item}>
          <Box width="100%">
            <NewH1>Live</NewH1>
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box height="50%">
                <SlideInImage images={images} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <NewTextBox msgText={liveTimeTable}>詳細</NewTextBox>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default live;
