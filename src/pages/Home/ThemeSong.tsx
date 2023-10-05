import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import HoverableElement from "../../components/HoverbleElement";
import Page from "../../components/Page";

const ThemeSong: React.FC = () => {
  return (
    <>
      <Page>
        <HoverUnderlineLink>
          <HoverableElement bellowContent={"キャラクター(緑黄色社会)"}>
            Theme song
          </HoverableElement>
        </HoverUnderlineLink>
        <YoutubeEmbed />
      </Page>
    </>
  );
};

export default ThemeSong;
