import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide/Slide";

const styles = (theme) => ({
  flex: {
    flex: 1,
    textAlign: "right",
    paddingBottom: 0,
    marginBottom: "-18px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingRight: "18px",
    paddingLeft: "18px",
    textAlign: "left",
    paddingBottom: "2px",
  },
  signUpBottom: {
    height: "60px",
    marginTop: "16px",
    width: "50%",
  },
  errorMsg: {
    color: "#FF5722",
    textAlign: "center",
    width: "100%",
  },
});

const InfoForm = (props) => {
  return (
    <div>
      <Dialog
        ignoreBackdropClick={true}
        open={props.open}
        onRequestClose={props.close}
        transition={<Slide direction="up" />}
      >
        <DialogTitle className={props.classes.flex}>
          <IconButton color="contrast" onClick={props.close} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={props.classes.container}>
          <div className={props.classes.form}>
            <Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="You will need to actively take your temperature to the start of
              every shift."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Definition of Close Physical Contact: 6 feet or closer for a
              cumulative total of 15 minutes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="For any questions, please call Employee Health's number:
              218-281-9492."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="For any issues with the COVID-19 app, please call IT: 218-277-7088" />
                </ListItem>
              </List>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

InfoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoForm);
