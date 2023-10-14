import React from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeOutContainer = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 0 : 1)};
  transition: opacity 2s ease;
  animation: ${fadeIn} 2s ease;
`;

const FadeInContainer = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 2s ease;
  animation: ${fadeIn} 2s ease;
`;

interface content {
  children: React.ReactNode;
}
const FadeOutOnScroll: React.FC<content> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the effect only once
  });

  return (
    <>
      <FadeInContainer isVisible={inView} ref={ref}>
        <p>{children}</p>
      </FadeInContainer>
      <FadeOutContainer isVisible={inView} ref={ref}>
        <p>{children}</p>
      </FadeOutContainer>
    </>
  );
};

export default FadeOutOnScroll;
