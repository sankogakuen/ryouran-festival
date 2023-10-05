import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  alignitems: left;
`;

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "0", // 右端から線を出現させる
      bottom: -3,
      width: "0", // 初期状態では幅0にする
      height: 2,
      backgroundColor: "#000",
      transition: "width 0.3s ease", // 幅が変化するアニメーションを追加
    },
    "&:hover::after": {
      width: "100%", // ホバー時に幅を100%に拡大
    },
  },
});

interface children {
  children: React.ReactNode;
}

const HoverUnderlineLink: React.FC<children> = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.link}>{children}</h1>
    </Container>
  );
};

export default HoverUnderlineLink;
