import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Live from "./live";
import Message from "./message";
import ThemeSong from "./themesong";
import Access from "./access";
import Links from "./links";
import Top from "../Page/top";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Top />
      <Live />
      <Message />
      <ThemeSong />
      <Access />
      <Links />
    </div>
  );
};
/*
 
 */

export default Home;
