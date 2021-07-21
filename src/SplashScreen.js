import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, CircularProgress } from "@material-ui/core";

import image from "./RVH wordmark stacked white.png";

const styles = (theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#222222",
  },
  top: {
    width: "100%",
    justifyContent: "center",
    flex: "auto",
    padding: "20px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "0",
    alignItems: "center",
  },
  progress: {
    height: "10px",
    zIndex: 5000,
  },
  errorMsg: {
    color: "#FF5722",
  },
});

const SplashScreen = (props) => {
  return (
    <div className={props.classes.body}>
      <Grid container className={props.classes.top} spacing={0}>
        <Grid className={props.classes.container} item xs={12}>
          <img height="75px" alt="Logo" src={image}></img>
        </Grid>
      </Grid>
      <Grid className={props.classes.container} item xs={12}>
        <CircularProgress />
      </Grid>
    </div>
  );
};

SplashScreen.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplashScreen);
