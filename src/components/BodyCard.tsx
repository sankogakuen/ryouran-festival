import React, { ReactNode } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <Button size="small" variant="outlined" component={Link} to={popUpUrl}>
          <AiOutlineExport />
        </Button>
      </CardActions>
    </Card>
  );
};
export default BodyCard;
