import React from "react";
import { firestore } from "../../firebase";
import { Redirect } from "react-router";
import { auth, createEmailPassword, passwordUpdate } from "../../firebase";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";
import InfoForm from "./infoForm";
import Dashboard from "../../Dashboard";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      loading: false,
      authed: false,
      open: {
        signUp: false,
        forgot: false,
      },
      forgotMsg: null,
      loginMsg: null,
      signUpMsg: null,
    };
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  handleLogin = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleSignUp = async (event) => {
    this.setState({ loading: true });
    createEmailPassword(this.state.email, this.state.password)
      .then((cred) => {
        //sending user data to firestore.. working!
        firestore
          .collection("users")
          .doc(cred.user.uid)
          .set({
            uid: cred.user.uid,
            displayName: this.state.displayName,
            email: this.state.email,
            datetime: new Date(),
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ loading: false });
        this.setState({ signUpMsg: error.message });
      });
  };
  handleForgot = (e) => {
    this.setState({ loading: true });
    passwordUpdate(this.state.email)
      .then(() => {
        this.setState({ forgotMsg: "Password reset email sent." });
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        this.setState({ forgotMsg: "Email address not found." });
      });
  };
  updateDisplayName = (e) => {
    this.setState({ displayName: e.target.value });
    if (e.target.value === "") {
      this.setState({ loginMsg: null });
    }
  };
  updateEmail = (e) => {
    this.setState({ email: e.target.value });
    if (e.target.value === "") {
      this.setState({ loginMsg: null });
    }
  };
  updatePassword = (e) => {
    this.setState({ password: e.target.value });
    if (e.target.value === "") {
      this.setState({ loginMsg: null });
    }
  };
  signUpDialog = () => {
    this.setState({ open: { signUp: true } });
  };
  forgotDialog = () => {
    this.setState({ open: { forgot: true } });
  };
  closeDialog = () => {
    this.setState({ open: { signUp: false } });
    this.setState({ open: { forgot: false } });
    this.setState({ signUpMsg: null });
    this.setState({ forgotMsg: null });
    this.setState({ loginMsg: null });
  };

  render() {
    //place homepage or dashboard here to redirect after login
    if (this.state.authed) {
      return <Redirect to="/dashboard" Component={Dashboard} />;
    } else {
      return (
        <div>
          <LoginForm
            loading={this.state.loading}
            updateEmail={this.updateEmail}
            updatePassword={this.updatePassword}
            email={this.state.email}
            password={this.state.password}
            msg={this.state.loginMsg}
            submit={this.handleLogin}
            signUpDialog={this.signUpDialog}
            forgotDialog={this.forgotDialog}
          />
          <SignUpForm
            updateDisplayName={this.updateDisplayName}
            displayName={this.displayName}
            updateEmail={this.updateEmail}
            updatePassword={this.updatePassword}
            email={this.state.email}
            open={this.state.open.signUp}
            close={this.closeDialog}
            msg={this.state.signUpMsg}
            submit={this.handleSignUp}
          />
          <InfoForm
            open={this.state.open.forgot}
            close={this.closeDialog}
            updateEmail={this.updateEmail}
            email={this.state.email}
            msg={this.state.forgotMsg}
            submit={this.handleForgot}
          />
        </div>
      );
    }
  }
}

export default Login;
