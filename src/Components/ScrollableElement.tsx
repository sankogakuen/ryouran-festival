import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const ScrollableElement = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const springProps1 = useSpring({
    transform: `translateY(-${scrollY / 2}px)`, // 要素1の速度
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const springProps2 = useSpring({
    transform: `translateY(-${scrollY / 3}px)`, // 要素2の速度
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="scrollable-container">
      <animated.div className="scrollable-element" style={springProps1}>
        {/* 要素1のコンテンツ */}
      </animated.div>
      <animated.div className="scrollable-element" style={springProps2}>
        {/* 要素2のコンテンツ */}
      </animated.div>
    </div>
  );
};
