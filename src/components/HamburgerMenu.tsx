import React, { useState } from "react";
import { ReactNode } from "react";
import { IconButton, Drawer, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CustomListItem from "./CustomListItem";
import { AiOutlineDoubleLeft } from "react-icons/ai";

interface prop {
  IconItems: ReactNode[];
  MenuItems: string[];
}

const HamburgerMenu: React.FC<prop> = ({ IconItems, MenuItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
            <AiOutlineDoubleLeft />
          </IconButton>
        </div>
        {MenuItems.map((text, index) => (
          <CustomListItem buttonText={text} icon={IconItems[index]} />
        ))}
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
