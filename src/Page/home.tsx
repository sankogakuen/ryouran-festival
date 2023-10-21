import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Page from "../Components/Page";
import Top from "./top";
import Live from "./live";
import Message from "./message";
import ThemeSong from "./themesong";
import Access from "./access";
import Links from "./links";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Top />
      <Page sectionId="Live">
        <Live />
      </Page>
      <Message />
      <ThemeSong />
      <Page sectionId="Access">
        <Access />
      </Page>
      <Links />
    </>
  );
};

export default Home;
