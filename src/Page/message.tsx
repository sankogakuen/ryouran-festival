import * as React from "react";
import { Grid, Toolbar } from "@mui/material";

import Page from "../Components/Page";
import SlideInImage from "../Components/SlideInImage";
import NewTextBox from "../Components/NewTextBox";

import image1 from "../static/img/msg/image1.png";
import image2 from "../static/img/msg/image2.png";

const images = [image1, image2];

const Message: React.FC = () => {
  const messagedByYokoyamaText = `
                  みなさん、こんにちは！！！ 繚乱祭実行委員長の横山真人です。
                  今回の繚乱祭（文化祭）は、昨年度までには無かったショートムービーブロックや制作ブロック、またファションショーブロックやダンスブロックなどのステージパフォーマンスに特化したブロックなどがたくさんあります！
                  つまり、今までの大宮キャンパスの繚乱祭の中で最大規模となります！
                  今回のテーマは「百花繚乱 ～みんなの個性咲き誇れ～」！
                  各ブロック、参加される生徒のみな一人一人がテーマを意識し、実際に個性を発揮して最高の繚乱祭を作り上げます！
                  最大規模の繚乱祭、皆さまぜひお越しください!
`;
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    width: "80%", // 幅を80%に設定
    background: "#0f0f0f0f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section id="Message">
      <div style={containerStyle}>
        <Toolbar />
        <div style={item}>
          <h1>Message</h1>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <NewTextBox msgText={messagedByYokoyamaText} />
            </Grid>
            <Grid item xs={12} sm={1} sx={{ borderRight: 1 }} />
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={5}>
              <div style={{ height: "50vh" }}>
                <SlideInImage images={images} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Message;
