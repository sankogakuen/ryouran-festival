import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  <AiOutlineCalendar />,
  <AiOutlineCamera />,
  <AiOutlineMail />,
  <BiMusic />,
  <AiOutlineEnvironment />,
  <AiOutlineExport />,
];
const MenuItems = [
  "Home",
  "Time table",
  "Live",
  "Message",
  "Theme song",
  "Access",
  "Links",
];

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  background: "#FFFEF3",
  width: "100%",
  boxShadow: "0px 2px 4px rgba(255, 206, 132, 1)", // 影の色を赤に変更
}));

const Navbar: React.FC = () => {
  return (
    <CustomAppBar>
      <Toolbar>
        <HamburgerMenu IconItems={IconItems} MenuItems={MenuItems} />
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
