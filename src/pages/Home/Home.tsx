import React from "react";
import Top_title_img from "../../static/img/Top-title-img.png";
import ScrollUp from "../../utils/ScrollUp";
import FadeInImage from "../../components/FadingImage";

import Live from "./Live";
import Timetable from "./Timetable";
import Message from "./Message";
import ThemeSong from "./ThemeSong";
import Access from "./Access";
import Links from "./Links";

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <FadeInImage src={Top_title_img} alt="sanko festival" />
      </section>

      <Timetable />
      <Live />
      <Message />
      <ThemeSong />
      <Access />
      <Links />
      <ScrollUp />
    </>
  );
};

export default Home;
