import * as React from "react";
import { useState } from "react";
import { Typography, Collapse } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SlideInFadeInComponent from "./SlideInFadeInComponent";

import { AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";

interface Props {
  msgText: string;
  children: React.ReactNode;
}

const NewTextBox: React.FC<Props> = ({ msgText, children }) => {
  const isMobile = !useMediaQuery("(max-width:600px)");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const formattedText = msgText.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      {index !== msgText.split("\n").length - 1 && <br />}{" "}
    </span>
  ));

  const textStile = {
    fontSize: "100%",
    fontFamily: "M PLUS Rounded 1c",
    fontWeight: "500",
  };

  const commonContent = (
    <div
      style={{
        textAlign: "justify",
        hyphens: "auto",
      }}
    >
      <Typography variant="body1" style={textStile}>
        {formattedText}
      </Typography>
    </div>
  );

  if (isMobile) {
    return <SlideInFadeInComponent>{commonContent}</SlideInFadeInComponent>;
  } else {
    return (
      <>
        <SlideInFadeInComponent>
          <Collapse in={!isCollapsed}>{commonContent}</Collapse>
          {isCollapsed && (
            <div onClick={toggleCollapse}>
              <AiFillCaretRight /> タップして詳細を表示
            </div>
          )}
          {!isCollapsed && (
            <div onClick={toggleCollapse}>
              <AiFillCaretUp /> タップして閉じる
            </div>
          )}
        </SlideInFadeInComponent>
      </>
    );
  }
};

export default NewTextBox;
