import React, { useState, useEffect } from "react";
import Top_Title_Img from "../static/img/Top-title-img.png";
import BigTitle from "../static/img/BigTitle.png";
import { Fade, Box, Grid, Typography, Paper } from "@mui/material";
import { AiOutlineCaretDown } from "react-icons/ai";

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
    fontFamily: "Noto Serif JP",
  };
  const dateStile = {
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
            <img src={BigTitle} alt="画像の説明" style={{ width: "80%" }} />
          </Box>
        </Fade>
        <Fade in={secondImageVisible} timeout={2000}>
          <Box position="absolute">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  maxHeight={"50%"}
                  display="flex"
                  justifyContent="center" // 横揃えで配置
                >
                  <Box
                    style={textStile}
                    display="flex"
                    flexDirection="column" // 縦に揃えて配置
                    justifyContent="center" // 横揃えで配置
                    alignItems="center"
                  >
                    <img
                      src={Top_Title_Img}
                      alt="To title img"
                      style={{ width: "80%" }}
                    />
                    <div>百花繚乱</div>
                    <div>～みんなの個性咲き誇れ～</div>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  style={dateStile}
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
                    <Grid item xs={12}>
                      <h3 style={{ margin: "5px 0" }}>2023</h3>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography style={textStile} variant="h4">
                            11/26
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={textStile} variant="h5">
                            sun
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} maxWidth={"80%"}>
                      <AiOutlineCaretDown />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography style={textStile} variant="h4">
                            11/27
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={textStile} variant="h5">
                            mon
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
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
