import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HamburgerMenu from "../Navbar/HamburgerMenu";

import BigTitle from "../static/img/BigTitle.png";

import {
  AiOutlineHome,
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

const Navbar: React.FC = () => {
  const CustomAppBar: React.CSSProperties = {
    position: "fixed",
    background: "#FFFEF3",
    boxShadow: "0px 2px 4px rgba(255, 206, 132, 1)", // 影の色を赤に変更
  };

  return (
    <div style={{ display: "flex", alignItems: "left" }}>
      <AppBar style={CustomAppBar}>
        <Toolbar>
          <HamburgerMenu IconItems={IconItems} MenuItems={MenuItems} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
/*

 */
//<ScrollShrinkComponent></ScrollShrinkComponent>;
// background: "#FFFEF3",
export default Navbar;
