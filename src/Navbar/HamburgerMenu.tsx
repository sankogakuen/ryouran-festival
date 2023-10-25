import * as React from "react";
import { ReactNode, useState } from "react";
import { Grid, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import List from "./List";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface prop {
  IconItems: ReactNode[];
  MenuItems: string[];
}

const HamburgerMenu: React.FC<prop> = ({ IconItems, MenuItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ボタンが押されたら状態を切り替える
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          {/* Menu iconを表示 */}
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* ボタンを押したら出てくるやつ */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* 閉じるボタン */}
          <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
            <ClearIcon />
          </IconButton>
        </div>

        {MenuItems.map((text, index) => (
          <AnchorLink
            href={`#${text}`}
            style={{ textDecoration: "none", color: "#000000" }}
            key={index}
          >
            <List buttonText={text} icon={IconItems[index]} key={index} />
          </AnchorLink>
        ))}
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
