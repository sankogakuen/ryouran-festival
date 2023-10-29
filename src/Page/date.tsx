import * as React from "react";
import Page from "../Components/Page";
import NewH1 from "../Components/NewH1";

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
        <p>1日目: 11/26(日)</p>
        <p>2日目: 11/27(月)</p>
      </div>
    </Page>
  );
};

export default Date;
