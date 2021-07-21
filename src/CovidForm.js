import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Button,
  Grid,
  Typography,
  LinearProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  TextField,
  Popover,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

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
    paddingBottom: "0",
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
    color: "#FF5722",
  },
  loginButton: {
    width: "100%",
    height: "150px",
  },
  bottomButtons: {
    width: "75%",
    height: "50vh",
    color: "white",
    boxShadow: "0 0px 0px 0px",
  },
  days: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const CovidForm = (props, currentUser) => {
  //get data for displayName in user for sending the form......

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
            autoComplete="off"
            id="add-report"
            onSubmit={props.submit}
          >
            <TextField
              id="name"
              label="Enter First and Last Name"
              className={props.classes.textField}
              required
              margin="normal"
              fullWidth
              error={props.msg && true}
              value={props.displayName}
              onChange={props.updateDisplayName}
            />
            <div>
              <FormLabel className={props.classes.textField}>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        {...bindTrigger(popupState)}
                      >
                        Do you have a fever(> or equal to 100.0F) or symptoms of
                        COVID-19 in the past 48 hours? (Click to see symptoms)
                      </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Box p={2}>
                          <Typography>Fever or chills</Typography>
                          <Typography>Cough</Typography>
                          <Typography>
                            Shortness of breath or difficulty breathing
                          </Typography>
                          <Typography>Fatigue</Typography>
                          <Typography>Muscle or body aches</Typography>
                          <Typography>Headache</Typography>
                          <Typography>New loss of taste or smell</Typography>
                          <Typography>Sore throat</Typography>
                          <Typography>Congestion or runny nose</Typography>
                          <Typography>Nausea or vomiting</Typography>
                          <Typography>Diarrhea</Typography>
                        </Box>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </FormLabel>
              <RadioGroup
                aria-label="exposed"
                name="exposed"
                value={props.symptoms}
                onChange={props.updateSymptoms}
                className={props.classes.days}
              >
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label={
                    <Typography variant="body2" color="textPrimary">
                      No
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label={
                    <Typography variant="body2" color="textPrimary">
                      Yes
                    </Typography>
                  }
                />
              </RadioGroup>
            </div>
            <div>
              <FormLabel value="start" className={props.classes.container}>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <Button
                        size="medium"
                        variant="contained"
                        color="primary"
                        {...bindTrigger(popupState)}
                      >
                        In the past 14 days: (Click to see more)
                      </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Box p={2}>
                          <List>
                            <ListItem>
                              <ListItemText primary="Have you had COVID-19?" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Been in close physical contact with anyone who tested positive for COVID-19?" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Have symptoms of COVID-19?" />
                            </ListItem>
                          </List>
                        </Box>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </FormLabel>
              <RadioGroup
                aria-label="symptoms"
                name="symptoms"
                value={props.exposed}
                onChange={props.updateExposed}
                className={props.classes.container}
              >
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label={
                    <Typography variant="body2" color="textPrimary">
                      No
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label={
                    <Typography variant="body2" color="textPrimary">
                      Yes
                    </Typography>
                  }
                />
              </RadioGroup>
            </div>
            <Typography className={props.classes.errorMsg} type="caption">
              {props.msg}
            </Typography>
            <Button className={props.classes.loginButton} type="submit">
              Submit Screening
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

CovidForm.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CovidForm);
