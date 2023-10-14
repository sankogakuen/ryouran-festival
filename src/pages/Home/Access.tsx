import React from "react";
import Page from "../../components/Page";
import GoogleMap from "../../components/GoogleMap";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";

const Access: React.FC = () => {
  return (
    <>
      <section id="access" />
      <Page>
        <HoverUnderlineLink>ACCESS</HoverUnderlineLink>
        <GoogleMap />
      </Page>
    </>
  );
};

export default Access;
