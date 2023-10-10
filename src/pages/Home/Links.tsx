import React from "react";
import Page from "../../components/Page";
import BodyCard from "../../components/BodyCard";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import { Grid } from "@material-ui/core";
import InstagramImg from "../../static/img/InstagramImg.png";
import TwitterImg from "../../static/img/TwitterImg.png";
import OmiyaHpImg from "../../static/img/omiyaHP.png";
import {
  AiFillGithub,
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Links: React.FC = () => {
  return (
    <>
      <section id="links">
        <Page>
          <HoverUnderlineLink>Links</HoverUnderlineLink>

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
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Page>
      </section>
    </>
  );
};

export default Links;
