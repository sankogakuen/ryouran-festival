import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import image1 from "../static/img/msg/image1.png";
import image2 from "../static/img/msg/image2.png";

interface ImageSliderProps {
  images: string[]; // 表示したい画像のリスト
}

const SlideInImage: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      statusFormatter={(current) => ""}
    >
      <div>
        <img
          src={image1}
          alt={`Image1`}
          style={{
            width: "100%", // 画像の幅を調整するスタイル
            height: "100%",
          }}
        />
      </div>
      <div>
        <img
          src={image2}
          alt={`Image2`}
          style={{
            width: "100%", // 画像の幅を調整するスタイル
            height: "100%",
          }}
        />
      </div>
    </Carousel>
  );
};

export default SlideInImage;
