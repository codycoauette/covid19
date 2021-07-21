import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  TextField,
  Button,
  Grid,
  Typography,
  LinearProgress,
} from "@material-ui/core";

import image from "../../RVH wordmark stacked white.png";

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
    color: "#ffffff",
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
  },
  errorMsg: {
    color: "#FF5722",
  },
  loginButton: {
    width: "100%",
    height: "60px",
  },
  bottomButtons: {
    width: "75%",
    height: "35vh",
    color: "#E0E0E0",
    boxShadow: "0 0px 0px 0px",
  },
});

const LoginForm = (props) => {
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
            onSubmit={props.submit}
          >
            <TextField
              id="email"
              label="Email"
              className={props.classes.textField}
              margin="normal"
              fullWidth
              error={props.msg && true}
              value={props.email}
              onChange={props.updateEmail}
            />
            <TextField
              id="password"
              label="Password"
              className={props.classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              error={props.msg && true}
              value={props.password}
              onChange={props.updatePassword}
            />
            <Typography className={props.classes.errorMsg} type="caption">
              {props.msg}
            </Typography>
            <Button className={props.classes.loginButton} type="submit">
              Login
            </Button>
          </form>
        </Grid>
        <Grid className={props.classes.container} item xs={5}>
          <Button
            onClick={props.signUpDialog}
            dense
            className={props.classes.bottomButtons}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid className={props.classes.container} item xs={5}>
          <Button
            onClick={props.forgotDialog}
            dense
            className={props.classes.bottomButtons}
          >
            Info
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
