import React from "react";
import Top_title_img from "../../static/img/Top-title-img.png";
import ScrollUp from "../../utils/ScrollUp";
import FadeInImage from "../../components/FadingImage";

import Access from "./Access";
import ThemeSong from "./ThemeSong";

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <FadeInImage src={Top_title_img} alt="sanko festival" />
      </section>

      <ThemeSong />
      <Access />
      <section id="access" />
      <ScrollUp />
    </>
  );
};

export default Home;
