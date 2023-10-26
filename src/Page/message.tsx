import * as React from "react";
import { Box, Grid } from "@mui/material";

import SlideInImage from "../Components/SlideInImage";
import NewTextBox from "../Components/NewTextBox";
import NewH1 from "../Components/NewH1";
import Page from "../Components/Page";

import image1 from "../static/img/msg/image1.png";
import image2 from "../static/img/msg/image2.png";

const images = [image1, image2];

// styled-componentsを使用して下線スタイルを定義
const Message: React.FC = () => {
  const messagedByYokoyamaText = `
                  みなさん、こんにちは！！！ 繚乱祭実行委員長の横山真人です。
                  今回の繚乱祭（文化祭）は、昨年度までには無かったショートムービーブロックや制作ブロック、またファションショーブロックやダンスブロックなどのステージパフォーマンスに特化したブロックなどがたくさんあります！
                  つまり、今までの大宮キャンパスの繚乱祭の中で最大規模となります！
                  今回のテーマは「百花繚乱 ～みんなの個性咲き誇れ～」！
                  各ブロック、参加される生徒のみな一人一人がテーマを意識し、実際に個性を発揮して最高の繚乱祭を作り上げます！
                  最大規模の繚乱祭、皆さまぜひお越しください!
`;

  return (
    <Page sectionId="Message">
      <NewH1>Message</NewH1>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Box height="50%">
            <SlideInImage images={images} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewTextBox msgText={messagedByYokoyamaText}>詳細</NewTextBox>
        </Grid>
      </Grid>
    </Page>
  );
};

/*

 */

export default Message;
