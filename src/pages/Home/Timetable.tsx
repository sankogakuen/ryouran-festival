import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";

const Timetable: React.FC = () => {
  return (
      <section id="timetable">
        <Page>
          <HoverUnderlineLink>Time table</HoverUnderlineLink>
        </Page>
    </section>
  );
};
export default Timetable;
