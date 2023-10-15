import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardMedia } from "@material-ui/core";
interface content {
  images: string[];
}

const imagesPerScroll = 1; // 十回スクロールごとに画像を切り替える

const ImageSlider: React.FC<content> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault(); // Prevent default wheel scroll behavior
    const newScrollCount = scrollCount + 1;
    setScrollCount(newScrollCount);
    if (newScrollCount >= imagesPerScroll) {
      // 指定された回数スクロールごとに画像を切り替え
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScrollCount(0);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, [scrollCount]); // カウントが変わった時だけ再登録

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <Card>
        <CardMedia
          component="img"
          alt={`Image ${currentIndex + 1}`}
          height="100%"
          image={images[currentIndex]}
          style={{ opacity }}
          onWheel={(event) => event.preventDefault()} // Prevent wheel scroll on image
        />
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default ImageSlider;
