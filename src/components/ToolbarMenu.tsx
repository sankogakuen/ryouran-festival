import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "@material-ui/core/Button";
import {
  AiOutlineHome,
  AiOutlineCamera,
  AiOutlineExport,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    background: "#FFFEF3",
    width: "100%",
    boxShadow: "0px 2px 4px rgba(255, 206, 132, 1)", // 影の色を赤に変更
  },
  customButtonForPC: {
    fontSize: "20px",
  },
  customButtonForMobile: {
    padding: "8px 16px", // パディングを調整して大きさを変更
    marginLeft: "auto",
  },
}));

const ToolbarMenu: React.FC = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  return (
    <>
      <AnchorLink
        href="#links"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        offset={() => window.innerHeight / 8}
      >
        <Button
          className={
            isMobile ? classes.customButtonForMobile : classes.customButtonForPC
          }
        >
          <AiOutlineExport />
        </Button>
      </AnchorLink>

      <AnchorLink
        href="#live"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        offset={() => window.innerHeight / 8}
      >
        <Button
          className={
            isMobile ? classes.customButtonForMobile : classes.customButtonForPC
          }
        >
          <AiOutlineCamera />
        </Button>
      </AnchorLink>

      <AnchorLink
        href="#home"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        offset={() => window.innerHeight / 2 - window.innerHeight / 4}
      >
        <Button
          className={
            isMobile ? classes.customButtonForMobile : classes.customButtonForPC
          }
        >
          <AiOutlineHome />
        </Button>
      </AnchorLink>
      <AnchorLink
        href="#timetable"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        offset={() => window.innerHeight / 8}
      >
        <Button
          className={
            isMobile ? classes.customButtonForMobile : classes.customButtonForPC
          }
        >
          <AiOutlineCalendar />
        </Button>
      </AnchorLink>

      <AnchorLink
        href="#access"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        offset={() => window.innerHeight / 8}
      >
        <Button
          className={
            isMobile ? classes.customButtonForMobile : classes.customButtonForPC
          }
        >
          <BiMap />
        </Button>
      </AnchorLink>
    </>
  );
};

export default ToolbarMenu;
