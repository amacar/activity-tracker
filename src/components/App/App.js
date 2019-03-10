import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "../../modules/HomeScreen/HomeScreen";
import ScheduleActivity from "../../modules/ScheduleActivity/ScheduleActivity";
import TrackActivity from "../../modules/TrackActivity/TrackActivity";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/schedule-activity" component={ScheduleActivity} />
          <Route path="/track-activity" component={TrackActivity} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
