import * as React from "react";
import Page from "../Components/Page";
import NewH1 from "../Components/NewH1";

const Date: React.FC = () => {
  const aboutRyouransai = `
　毎年、繚乱祭は2日程で開催されます。
1日目は大宮キャンパスにて模擬店をおこない、2日目はRaiBoC Hall（レイボックホール）にてステージ上でのパフォーマンス（LIVE）を実施します。今回は、中学校3年生の皆さんを、2日目のLIVEへご招待します！
`;

  const formattedText = aboutRyouransai.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index !== aboutRyouransai.split("\n").length - 1 && <br />}{" "}
    </span>
  ));
  const textStile = {
    color: "#113946",
    fontSize: "100%",
    fontFamily: "Zen Kaku Gothic New",
    fontWeight: "800",
  };

  return (
    <Page sectionId="Date">
      <NewH1>About</NewH1>
      <div
        style={{
          fontFamily: "Noto Serif JP",
          width: "80vw",
        }}
      >
        <div style={textStile}>{formattedText}</div>
      </div>
    </Page>
  );
};

export default Date;
