import React, { useEffect, useState } from "react";
interface props {
  children: React.ReactNode;
}

const ScrollShrinkComponent: React.FC<props> = ({ children }) => {
  const [scale, setScale] = useState(1);
  const minScale = 0.4;

  useEffect(() => {
    const handleScroll = () => {
      const scaleFactor = 1 - window.scrollY / 1000; // 調整可能なスケールファクター
      setScale(scaleFactor < minScale ? minScale : scaleFactor); // 最小サイズを設定
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shrinkStyle: React.CSSProperties = {
    height: `${scale}vh`,
    transform: `scale(${scale})`,
  };
  return <div style={shrinkStyle}>{children}</div>;
};

export default ScrollShrinkComponent;
