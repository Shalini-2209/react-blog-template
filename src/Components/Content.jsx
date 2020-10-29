import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Typography,
  Grid,
  Card,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { FormatBold } from "@material-ui/icons";

const useStyles = makeStyles({
  grid: {
    width: "100%",
  },
  heading: {
    fontSize: 25,
  },
  main: {
    fontSize: 21,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12} md={6} className={classes.item}>
        <br /> <br />
        <Typography variant="h6" className={classes.main}>
          From the firehose
        </Typography>
        <br />
        <Divider />
        <br /> <br />
        <div className={classes.height}>
          <Typography component="h5" variant="h5">
            Sample blog post
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            April 1, 2020 by Olivier
          </Typography>
        </div>
        <br /> <br />
        <Typography variant="body1">
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying
          Markdown.js.
          <br /> <br />
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
          <br /> <br />
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
          ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
          elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
        <br />
        <br />
        <Typography variant="h4" className={classes.heading}>
          Heading
        </Typography>
        <br />
        <Typography variant="body1">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
          <br /> <br />
          Sub-heading
          <br />
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
          <br /> <br />
          Sub-heading
          <br />
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
          <ul>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
        </Typography>
        <br />
        <Typography variant="body1">
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </Typography>
        <ol>
          <li> Vestibulum id ligula porta felis euismod semper.</li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </li>
        </ol>
        <br />
        <Typography variant="body1">
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </Typography>
        <br /> <br />
        <Typography component="h5" variant="h5">
          New feature
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          March 14, 2020 by Tom
        </Typography>
        <br /> <br />
        <Typography variant="body1">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
          <ul>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <br />
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
          <br /> <br />
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <br />
        <br /> <br />
        <br />
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              About benevolent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <br />
        <br />
        <br />
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Contact us
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Content;
