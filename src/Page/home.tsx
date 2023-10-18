import * as React from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import Page from "../Components/Page";
import Top from "./top";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Top />
      <Page sectionId="Time table">Time table</Page>
      <Page sectionId="Live">Live</Page>
      <Page sectionId="Access">Access</Page>
    </>
  );
};

export default Home;
