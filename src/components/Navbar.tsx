import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HamburgerMenu from "./HamburgerMenu";
import ToolbarMenu from "./ToolbarMenu";

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

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AppBar color="default" position="static" className={classes.appBar}>
        {isMobile ? (
          <Toolbar style={{ justifyContent: "left" }}>
            <HamburgerMenu />
          </Toolbar>
        ) : (
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography>
              <ToolbarMenu />
            </Typography>
          </Toolbar>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
