import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomeScreen from "../../modules/HomeScreen/HomeScreen";
import ScheduleActivityModal from "../../modules/ScheduleActivityModal/ScheduleActivityModal";
import { fetchActivities } from "../../actions/activitiesActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/schedule-activity" component={ScheduleActivityModal} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchActivities
};

export default connect(
  undefined,
  mapDispatchToProps
)(App);
