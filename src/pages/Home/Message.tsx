import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/paragraph";
import SlideInInfo from "../../components/SlideInInfo";
import ImageSlider from "../../components/ImageSlider";

const Message: React.FC = () => {
  const textBoxStyle = {
    width: "50%",
    height: "50%",
  };

  const pcH1 = {
    fontSize: "20px",
  };

  const mobileImgContainer = {
    width: "100%",
    height: "50vh",
    background: "#f0f0f0",
  };

  const mobileH1 = {
    fontSize: "10px",
  };

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <Page>
        {isMobile ? (
          <>
            <div style={mobileH1}>
              <HoverUnderlineLink>Works</HoverUnderlineLink>
            </div>
            <div style={mobileImgContainer}>{/*<ImageSlider />*/}</div>
            <SlideInInfo>{formattedText}</SlideInInfo>
          </>
        ) : (
          <>
            <div style={pcH1}>
              <HoverUnderlineLink>Message</HoverUnderlineLink>
            </div>
            <Grid container spacing={2}>
              <Grid style={textBoxStyle} item>
                <Paragraph>{formattedText}</Paragraph>
              </Grid>

              <Grid item xs={6}>
                <div style={mobileImgContainer}>{/*<ImageSlider /> */}</div>
              </Grid>
            </Grid>
          </>
        )}
      </Page>
    </>
  );
};

export default Message;
