import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Page from "../Components/Page";
import Top from "./top";
import Links from "./links";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Top />
      <Page sectionId="Time table">Time table</Page>
      <Page sectionId="Live">Live</Page>
      <Page sectionId="Message">Message</Page>
      <Page sectionId="Theme song">Theme song</Page>
      <Page sectionId="Access">Access</Page>
      <Page sectionId="Links">
        <Links />
      </Page>
    </>
  );
};

export default Home;
