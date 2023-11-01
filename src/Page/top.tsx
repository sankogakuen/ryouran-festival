import React, { useState, useEffect } from "react";
import Top_Title_Img from "../static/img/Top-title-img.png";
import BigTitle from "../static/img/BigTitle.png";
import { Fade, Box, Grid, Typography } from "@mui/material";
import { AiOutlineCaretDown } from "react-icons/ai";
import { styled } from "@mui/system";

// スタイルを定義
const StyledTypography = styled(Typography)(({ theme }) => ({
  // PC用のスタイル
  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
  },
  // スマートフォン用のスタイル
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    fontWeight: "800",
  },
}));

const ImageBlock: React.FC = () => {
  const textStile = {
    fontFamily: "Noto Serif JP",
  };
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src={Top_Title_Img} alt="To title img" style={{ width: "80%" }} />
      </Box>
      <StyledTypography align="center" variant="h6" style={textStile}>
        百花繚乱
        <br />
        ～みんなの個性咲き誇れ～
      </StyledTypography>
    </>
  );
};

const DateBlock: React.FC = () => {
  const textStile = {
    fontFamily: "Noto Serif JP",
    fontWeight: "400",
  };
  const link: React.CSSProperties = {
    position: "relative",
    content: '""',
    left: "100", // 右端から線を出現させる
    top: -0,
    height: 3,
    backgroundColor: "#808079",
    width: "100%",
  };
  return (
    <Grid item xs={12}>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        container
      >
        <Box
          alignItems="left"
          display="flex"
          flexDirection="column" // 縦に配置
          justifyContent="center"
          width="80%"
        >
          <Box width="50%">
            <Grid item xs={12}>
              <StyledTypography margin="5px 0" variant="h3" style={textStile}>
                2023
              </StyledTypography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <StyledTypography style={textStile}>11/26</StyledTypography>
                </Grid>
                <Grid item>
                  <StyledTypography style={textStile}>sun</StyledTypography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} maxWidth={"80%"}>
              <AiOutlineCaretDown />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <StyledTypography style={textStile}>11/27</StyledTypography>
                </Grid>
                <Grid item>
                  <StyledTypography style={textStile}>mon</StyledTypography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

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
        height="100vh" // 画面の高さいっぱいまで要素を広げる
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
            <img src={BigTitle} alt="Top title" style={{ width: "80%" }} />
          </Box>
        </Fade>
        <Fade in={secondImageVisible} timeout={2000}>
          <Box position="absolute">
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  height="50vh" // 画面の高さいっぱいまで要素を広げる
                >
                  <ImageBlock />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0}>
                  <DateBlock />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Box>
    </section>
  );
};

export default Top;
