import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardMedia,
  makeStyles,
  Grid,
  Paper,
} from "@material-ui/core";
import FeaturedPost from "./Post.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

const useStyles = makeStyles((theme) => ({
  title: {
    //color: "white",
    display: "inline-block",
  },
  img: {
    height: 350,
  },
  sizer: {
    fontSize: 30,
  },
  read: {
    color: "blue",
  },
  grid: {
    width: "100%",
    margin: "10",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Title = () => {
  const classes = useStyles();
  let title1 = "Featured Post";
  let title2 = "Post title";

  return (
    <>
      <Card>
        <div>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia
                className={classes.img}
                component="img"
                image="https://source.unsplash.com/random"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 8,
                  left: "5%",
                }}
              >
                <h1>
                  {" "}
                  Title of a longer featured
                  <br />
                  blog post <br />
                </h1>
                <div className={classes.sizer}>
                  Multiple lines of text that form the lede, informing new{" "}
                  <br />
                  readers quickly and efficiently about what's <br />
                  most interesting in this post's contents.
                </div>
                <br />
                <div className={classes.read}> Continue reading…</div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            {" "}
            <FeaturedPost title={title1} date={12} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            {" "}
            <FeaturedPost title={title2} date={11} />
          </Paper>
        </Grid>
      </Grid>
      <Content />
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
};

export default Title;
