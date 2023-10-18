import * as React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";

interface props {
  buttonText: string;
  icon: React.ReactNode; // ReactNode型でアイコンコンポーネントを受け取る
}

const List: React.FC<props> = ({ buttonText, icon }) => {
  return (
    <ListItem button>
      {icon && <IconButton>{icon}</IconButton>}
      <ListItemText primary={buttonText} />
    </ListItem>
  );
};

export default List;
