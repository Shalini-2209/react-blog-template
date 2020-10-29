import React, { Component } from "react";
import Title from "./ImageTitle.jsx";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  title: {
    flex: 2,
    // display: "inline-block",
  },
  links: {
    fontSize: 18,
    color: "black",
  },
  navBar: {
    justifyContent: "space-between",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <Button size="small" color="inherit">
          Subscribe
        </Button>
        <Typography align="center" className={classes.title} variant="h5">
          Blog
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined">Sign Up</Button>
      </Toolbar>
      <Divider />

      <Toolbar component="nav" className={classes.navBar}>
        <Link className={classes.links}>Technology</Link>
        <Link className={classes.links}>Culture</Link>
        <Link className={classes.links}>Design</Link>
        <Link className={classes.links}>Business</Link>
        <Link className={classes.links}>Politics</Link>
        <Link className={classes.links}>Opinion</Link>
        <Link className={classes.links}>Science</Link>
        <Link className={classes.links}>Health</Link>
        <Link className={classes.links}>Style</Link>
        <Link className={classes.links}>Travel</Link>
      </Toolbar>
      <Title />
    </>
  );
};

export default Header;
