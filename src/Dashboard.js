import React from "react";
import { Redirect, withRouter } from "react-router";
import { firestore } from "./firebase";
import CovidForm from "./CovidForm";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      exposed: "",
      symptoms: "",
      isExposed: false,
      isSymptoms: false,
      loading: false,
      authed: false,
      open: {
        info: false,
        symptomsbox: false,
      },
      forgotMsg: null,
      loginMsg: null,
      signUpMsg: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firestore
      .collection("reports")
      .add({
        name: this.state.displayName,
        exposed: this.state.exposed,
        symptoms: this.state.symptoms,
        datetime: new Date(),
      })
      .catch((error) => {
        alert(error.message);
      });
    if (this.state.isExposed === true || this.state.isSymptoms === true) {
      this.props.history.push("/health");
    } else {
      this.props.history.push("/thankyou");
    }
  };

  updateDisplayName = (e) => {
    this.setState({ displayName: e.target.value });
    if (e.target.value === "") {
      this.setState({ loginMsg: null });
    }
  };
  updateExposed = (e) => {
    this.setState({ exposed: e.target.value });
    if (e.target.value === "Yes") {
      this.setState({ isExposed: true });
    }
  };
  updateSymptoms = (e) => {
    this.setState({ symptoms: e.target.value });
    if (e.target.value === "Yes") {
      this.setState({ isSymptoms: true });
    }
  };
  render() {
    //place homepage or dashboard here to redirect after login
    if (this.state.authed === true) {
      return <Redirect to="/dashboard" Component={Dashboard} />;
    } else {
      return (
        <div>
          <CovidForm
            loading={this.state.loading}
            updateDisplayName={this.updateDisplayName}
            updateExposed={this.updateExposed}
            updateSymptoms={this.updateSymptoms}
            submit={this.handleSubmit}
            logout={this.handleLogout}
          />
        </div>
      );
    }
  }
}

export default withRouter(Dashboard);
