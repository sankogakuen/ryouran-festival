import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Live from "./live";
import Message from "./message";
import ThemeSong from "./themesong";
import Access from "./access";
import Links from "./links";
import Top from "../Page/top";
import StateOfLastYear from "./stateoflastyear";
import Date from "./date";

const Home: React.FC = () => {
  //
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
  //
  return (
    <>
      <Navbar />
      <Top />
      <Date />
      <Live />
      <Message />
      <StateOfLastYear />
      <ThemeSong />
      <Access />
      <Links />
    </>
  );
};
/*
 */

export default Home;
