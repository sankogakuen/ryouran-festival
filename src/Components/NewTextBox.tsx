import * as React from "react";
import { useState } from "react";
import { Button, Typography, Collapse } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SlideInFadeInComponent from "./SlideInFadeInComponent";

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

  const commonContent = (
    <div
      style={{
        width: "100%",
        textAlign: "justify",
        hyphens: "auto",
      }}
    >
      <Typography variant="body1">{formattedText}</Typography>
    </div>
  );

  if (isMobile) {
    return <SlideInFadeInComponent>{commonContent}</SlideInFadeInComponent>;
  } else {
    return (
      <>
        <Collapse in={!isCollapsed}>{commonContent}</Collapse>
        {isCollapsed && <div onClick={toggleCollapse}>{children}</div>}
        {!isCollapsed && <Button onClick={toggleCollapse}>{children}</Button>}
      </>
    );
  }
};

export default NewTextBox;
