import React from "react";
import Page from "../../components/Page";
import GoogleMap from "../../components/GoogleMap";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";

const Access: React.FC = () => {
  return (
    <>
      <Page>
        <section id="access">
          <HoverUnderlineLink>ACCESS</HoverUnderlineLink>
          <GoogleMap />
        </section>
      </Page>
    </>
  );
};

export default Access;
