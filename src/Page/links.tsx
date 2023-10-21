import * as React from "react";
import Page from "../Components/Page";
import BodyCard from "../Components/BodyCard";
import { Grid, Toolbar } from "@mui/material";

import InstagramImg from "../static/img/InstagramImg.png";
import TwitterImg from "../static/img/TwitterImg.png";
import OmiyaHpImg from "../static/img/omiyaHP.png";

import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const links: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const item: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    height: "100vh", // ブラウザの縦の高さ分の広さを確保
    width: "80%", // 幅を80%に設定
    background: "#0f0f0f0f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section id="Links">
      <div style={containerStyle}>
        <Toolbar />
        <div style={item}>
          <h1>Links</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <BodyCard
                title="学校公式HP"
                avatar={<AiOutlineGlobal />}
                imageUrl={OmiyaHpImg}
                text="飛鳥未来きずな高校大宮CP公式HP"
                popUpUrl="https://www.sanko.ac.jp/asuka-kizuna/omiya/"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BodyCard
                title="Instagram"
                avatar={<AiOutlineInstagram />}
                imageUrl={InstagramImg}
                text="大宮CP公式インスタグラム"
                popUpUrl="https://www.instagram.com/omiya.asukamiraikizuna/"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BodyCard
                title="Twitter / X"
                avatar={<AiFillTwitterSquare />}
                imageUrl={TwitterImg}
                text="大宮CP公式Twitter(X)"
                popUpUrl="https://twitter.com/kizunaomiya"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default links;
