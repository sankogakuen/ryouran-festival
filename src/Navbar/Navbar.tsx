import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Page from "../Components/Page";
import Top from "../Page/top";
import ScrollShrinkComponent from "../Components/ScrollShrinkComponent";

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineCamera,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineExport,
} from "react-icons/ai";
import { BiMusic } from "react-icons/bi";

const IconItems = [
  <AiOutlineHome />,
  <AiOutlineCamera />,
  <AiOutlineMail />,
  <BiMusic />,
  <AiOutlineEnvironment />,
  <AiOutlineExport />,
];
const MenuItems = ["Home", "Live", "Message", "Theme song", "Access", "Links"];

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  background: "#FFFEF3",
  width: "100%",
  boxShadow: "0px 2px 4px rgba(255, 206, 132, 1)", // 影の色を赤に変更
  minHeight: "10%",
}));

const Navbar: React.FC = () => {
  const [scale, setScale] = useState(1);
  const minScale = 0.5;
  useEffect(() => {
    const handleScroll = () => {
      const scaleFactor = 1 - window.scrollY / 1000; // 調整可能なスケールファクター
      setScale(scaleFactor < minScale ? minScale : scaleFactor); // 最小サイズを設定
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CustomAppBar: React.CSSProperties = {
    position: "fixed",
    background: "#FFFEF3",
    width: "100%",
    boxShadow: "0px 2px 4px rgba(255, 206, 132, 1)", // 影の色を赤に変更
  };

  return (
    <AppBar style={CustomAppBar}>
      <Toolbar>
        <HamburgerMenu IconItems={IconItems} MenuItems={MenuItems} />
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
    </AppBar>
  );
};
/*

 */
//<ScrollShrinkComponent></ScrollShrinkComponent>;
// background: "#FFFEF3",
export default Navbar;
