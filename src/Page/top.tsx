import React, { useState, useEffect } from "react";
import Top_Title_Img from "../static/img/Top-title-img.png";
import BigTitle from "../static/img/BigTitle.png";
import { Fade, Box } from "@mui/material";

import Page from "../Components/Page";
const Top: React.FC = () => {
  const [firstImageVisible, setFirstImageVisible] = useState(true);
  const [secondImageVisible, setSecondImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstImageVisible(false);
      setSecondImageVisible(true);
    }, 3000); // 3秒後に切り替え

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const textStile = {
    fontSize: "100%",
    fontFamily: "Noto Serif JP",
    fontWeight: "800",
  };
  const newBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <section id="Home">
      <Box
        style={newBox}
        height="90vh" // 画面の高さいっぱいまで要素を広げる
        position="relative"
        className="fadeIn"
        flexDirection="column"
      >
        <Fade in={firstImageVisible} timeout={2000}>
          <Box
            style={newBox}
            flexDirection="column" // 縦に配置
            position="absolute"
          >
            <img src={BigTitle} alt="画像の説明" style={{ width: "80%" }} />
          </Box>
        </Fade>
        <Fade in={secondImageVisible} timeout={2000}>
          <Box
            style={textStile}
            display="flex"
            flexDirection="column" // 縦に配置
            justifyContent="center"
            alignItems="center"
            position="absolute"
          >
            <img
              src={Top_Title_Img}
              alt="画像の説明"
              style={{ width: "80%" }}
            />
            <div>百花繚乱</div>
            <div>～みんなの個性咲き誇れ～</div>
          </Box>
        </Fade>
      </Box>
    </section>
  );
};

export default Top;

/*

      <Box
        style={newBox}
        height="90vh" // 画面の高さいっぱいまで要素を広げる
        position="relative"
        className="fadeIn"
        flexDirection="column"
      >
  const textStile = {
    fontSize: "100%",
    fontFamily: "Noto Serif JP",
    fontWeight: "800",
  };
  return (
    <section id="Home">
      <Box
        display="flex"
        flexDirection="column" // 縦に配置
        justifyContent="center"
        alignItems="center"
        minHeight="90vh" // 画面の高さいっぱいまで要素を広げる
        className="fadeIn"
      >
        <img src={Top_Title_Img} alt="画像の説明" style={{ width: "80%" }} />
        <Box
          style={textStile}
          display="flex"
          flexDirection="column" // 縦に配置
          justifyContent="center"
          alignItems="center"
        >
          <div>百花繚乱</div>
          <div>～みんなの個性咲き誇れ～</div>
        </Box>
      </Box>
    </section>
  );
 */
