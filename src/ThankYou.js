import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Typography,
  LinearProgress,
} from "@material-ui/core";

import image from "./RVH wordmark stacked white.png";

const styles = (theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#222222",
  },
  bottom: {
    width: "100%",
    justifyContent: "center",
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
    paddingBottom: "5px",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.spacing.unit * 100,
  },
  progress: {
    height: "10px",
    zIndex: 5000,
  },
  textField: {
    marginTop: 0,
    paddingBottom: "20px",
  },
  errorMsg: {
    color: "#ffffff",
    paddingBottom: "100px",
  },
  loginButton: {
    width: "100%",
    height: "200px",
  },
  bottomButtons: {
    width: "75%",
    height: "50vh",
    color: "white",
    boxShadow: "0 0px 0px 0px",
  },
});

const ThankYou = (props) => {
  return (
    <div className={props.classes.body}>
      {props.loading && <LinearProgress className={props.classes.progress} />}
      <Grid container className={props.classes.top} spacing={0}>
        <Grid className={props.classes.container} item xs={12}>
          <img height="75px" alt="Logo" src={image}></img>
        </Grid>
      </Grid>
      <Grid className={props.classes.bottom} container spacing={0}>
        <Grid className={props.classes.container} item xs={9}>
          <form
            className={props.classes.form}
            noValidate
            autoComplete="off"
            id="add-report"
          >
            <Typography className={props.classes.errorMsg} type="caption">
              Thank you for self reporting! Please close the app when finished.
            </Typography>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

ThankYou.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYou);
