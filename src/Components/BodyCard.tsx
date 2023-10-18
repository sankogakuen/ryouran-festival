import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { AiOutlineExport } from "react-icons/ai";

interface Props {
  avatar: ReactNode;
  title: string;
  text: string;
  imageUrl: string;
  popUpUrl: string;
}

const BodyCard: React.FC<Props> = (props) => {
  const { avatar, title, text, imageUrl, popUpUrl } = props;

  return (
    <Card variant="outlined">
      <CardHeader avatar={avatar} title={title} />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href={popUpUrl}>
          <AiOutlineExport />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default BodyCard;
