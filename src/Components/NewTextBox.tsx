import * as React from "react";
import { useState } from "react";
import { Button, Typography, Collapse } from "@mui/material";
import { useMediaQuery } from "@mui/material";

interface Props {
  msgText: string;
}

const NewTextBox: React.FC<Props> = ({ msgText }) => {
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
    return <>{commonContent}</>;
  } else {
    return (
      <>
        <Collapse in={!isCollapsed}>{commonContent}</Collapse>
        {isCollapsed && (
          <Button onClick={toggleCollapse}>メッセージを見る</Button>
        )}
        {!isCollapsed && (
          <Button onClick={toggleCollapse}>メッセージを閉じる</Button>
        )}
      </>
    );
  }
};

export default NewTextBox;
