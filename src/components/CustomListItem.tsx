import React from "react";
import { ListItem, ListItemText, IconButton } from "@material-ui/core";

interface CustomListItemProps {
  buttonText: string;
  icon: React.ReactNode; // ReactNode型でアイコンコンポーネントを受け取る
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  buttonText,
  icon,
}) => {
  return (
    <ListItem button>
      {icon && <IconButton color="inherit">{icon}</IconButton>}
      <ListItemText primary={buttonText} />
    </ListItem>
  );
};

export default CustomListItem;
