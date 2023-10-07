import React, { useState } from "react";
import { Collapse, Typography } from "@material-ui/core";
import Paragraph from "./paragraph";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";

interface Page {
  children: React.ReactNode;
}

const SlideInInfo: React.FC<Page> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "100%", margin: "10px" }}>
      <div onClick={handleToggle}>
        {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}
        実行委員長からのメッセージ
      </div>
      <Collapse in={isOpen}>
        <Typography>
          <Paragraph>{children}</Paragraph>
        </Typography>
      </Collapse>
    </div>
  );
};

export default SlideInInfo;
