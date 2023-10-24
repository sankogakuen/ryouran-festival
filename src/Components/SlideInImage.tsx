import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import SlideInFadeInComponent from "./SlideInFadeInComponent";

import image1 from "../static/img/msg/image1.png";
import image2 from "../static/img/msg/image2.png";

interface ImageSliderProps {
  images: string[]; // 表示したい画像のリスト
}

const SlideInImage: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <SlideInFadeInComponent>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        statusFormatter={(current) => ""}
      >
        {images.map((path, index) => (
          // リスト内の各画像パスをループして<img>要素を作成
          <div key={index}>
            <img
              src={path}
              alt={`Image ${index}`}
              style={{
                width: "100%", // 画像の幅を調整するスタイル
                height: "100%",
              }}
            />
          </div>
        ))}
      </Carousel>
    </SlideInFadeInComponent>
  );
};

export default SlideInImage;
