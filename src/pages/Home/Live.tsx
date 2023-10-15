import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import ImageSlider from "../../components/ImageSlider";

import image1 from "../../static/img/Live/image1.png";
import image2 from "../../static/img/Live/image2.png";
import image3 from "../../static/img/Live/image3.png";
import image4 from "../../static/img/Live/image4.png";

// 2日目LIVE内容

const images = [image1, image2, image3, image4];

const Live: React.FC = () => {
  return (
    <>
      <section id="live">
        <Page>
          <HoverUnderlineLink>The 2nd day: LIVE</HoverUnderlineLink>
          <ImageSlider images={images} />
        </Page>
      </section>
    </>
  );
};

export default Live;
