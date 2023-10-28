import * as React from "react";
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
