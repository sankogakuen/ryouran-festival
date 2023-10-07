import React from "react";
import Page from "../../components/Page";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";

const Links: React.FC = () => {
  return (
    <>
      <Page>
        <HoverUnderlineLink>Links</HoverUnderlineLink>
        Line Twitter Github
      </Page>
      <section id="links" />
    </>
  );
};

export default Links;
