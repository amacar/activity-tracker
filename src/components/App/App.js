import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomeScreen from "../../modules/HomeScreen/HomeScreen";
import ScheduleActivityModal from "../../modules/ScheduleActivityModal/ScheduleActivityModal";
import TrackActivityModal from "../../modules/TrackActivityModal/TrackActivityModal";
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
          <Route path="/track-activity" component={TrackActivityModal} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchActivities: () => dispatch(fetchActivities())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(App);
