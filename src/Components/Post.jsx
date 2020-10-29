import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  fonts: {
    lineHeight: 1.5,
    fontSize: 18,
  },

  read: {
    color: "blue",
    fontSize: 17,
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card className={classes.root} raised="true">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Nov {props.date}
            </Typography>
            <Typography
              component="h5"
              variant="body1"
              className={classes.fonts}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
              <br />
              <br />
              <div className={classes.read}> Continue reading...</div>
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/random"
        />
      </Card>
    </>
  );
}
