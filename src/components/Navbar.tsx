import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography>
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
                  isMobile
                    ? classes.customButtonForMobile
                    : classes.customButtonForPC
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
                  isMobile
                    ? classes.customButtonForMobile
                    : classes.customButtonForPC
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
                  isMobile
                    ? classes.customButtonForMobile
                    : classes.customButtonForPC
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
                  isMobile
                    ? classes.customButtonForMobile
                    : classes.customButtonForPC
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
                  isMobile
                    ? classes.customButtonForMobile
                    : classes.customButtonForPC
                }
              >
                <BiMap />
              </Button>
            </AnchorLink>           
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
