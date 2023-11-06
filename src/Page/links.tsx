import * as React from "react";
import BodyCard from "../Components/BodyCard";
import { Grid, Box } from "@mui/material";
import NewH1 from "../Components/NewH1";

import Page from "../Components/Page";
import InstagramImg from "../static/img/InstagramImg.png";
import TwitterImg from "../static/img/TwitterImg.png";
import OmiyaHpImg from "../static/img/omiyaHP.png";
import SlideInFadeInComponent from "../Components/SlideInFadeInComponent";

import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const links: React.FC = () => {
  return (
    <Page sectionId={"Links"}>
      <Box height={"90vh"} width={"80vw"}>
        <NewH1>Links</NewH1>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <SlideInFadeInComponent>
              <BodyCard
                title="学校公式HP"
                avatar={<AiOutlineGlobal />}
                imageUrl={OmiyaHpImg}
                text="飛鳥未来きずな高校大宮CP公式HP"
                popUpUrl="https://www.sanko.ac.jp/asuka-kizuna/omiya/"
              />
            </SlideInFadeInComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SlideInFadeInComponent>
              <BodyCard
                title="Instagram"
                avatar={<AiOutlineInstagram />}
                imageUrl={InstagramImg}
                text="大宮CP公式インスタグラム"
                popUpUrl="https://www.instagram.com/omiya.asukamiraikizuna/"
              />
            </SlideInFadeInComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SlideInFadeInComponent>
              <BodyCard
                title="Twitter / X"
                avatar={<AiFillTwitterSquare />}
                imageUrl={TwitterImg}
                text="大宮CP公式Twitter(X)"
                popUpUrl="https://twitter.com/kizunaomiya"
              />
            </SlideInFadeInComponent>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default links;
