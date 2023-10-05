import React, { ReactNode } from "react";
import styled from "styled-components";

const HoverTrigger = styled.div`
  &:hover .hover-content {
    display: block;
  }
`;

const HoverContent = styled.div`
  display: none;
`;

interface HoverableElementProps {
  children: ReactNode;
  bellowContent: String;
}

const HoverableElement: React.FC<HoverableElementProps> = ({
  children,
  bellowContent,
}) => {
  return (
    <>
      <HoverTrigger>
        {children}
        <HoverContent className="hover-content">{bellowContent}</HoverContent>
      </HoverTrigger>
    </>
  );
};

export default HoverableElement;
