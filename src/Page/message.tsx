import * as React from "react";
import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import image1 from "../static/img/msg/image1.png";
import image2 from "../static/img/msg/image2.png";

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
`;

const message: React.FC = () => {
  const messagedByYokoyamaText = `
                  みなさん、こんにちは！！！ 繚乱祭実行委員長の横山真人です。
                  今回の繚乱祭（文化祭）は、昨年度までには無かったショートムービーブロックや制作ブロック、またファションショーブロックやダンスブロックなどのステージパフォーマンスに特化したブロックなどがたくさんあります！
                  つまり、今までの大宮キャンパスの繚乱祭の中で最大規模となります！
                  今回のテーマは「百花繚乱 ～みんなの個性咲き誇れ～」！
                  各ブロック、参加される生徒のみな一人一人がテーマを意識し、実際に個性を発揮して最高の繚乱祭を作り上げます！
                  最大規模の繚乱祭、皆さまぜひお越しください!
`;
  const formattedText = messagedByYokoyamaText
    .split("\n")
    .map((line, index) => (
      <span key={index}>
        {line}
        {index !== messagedByYokoyamaText.split("\n").length - 1 && <br />}{" "}
      </span>
    ));

  return (
    <>
      <h1>Message</h1>
      <Grid container height="100%" spacing={2}>
        <Grid item xs={12} sm={5}>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "justify",
              textIndent: "1em",
              hyphens: "auto",
            }}
          >
            {formattedText}
          </div>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>

        <Grid borderLeft={1} item xs={12} sm={1}></Grid>

        <Grid xs={12} sm={5}>
          <img
            style={{ width: "100%" }}
            src={image1}
            alt="実行委員会メンバー"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default message;
