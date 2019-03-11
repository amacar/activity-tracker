import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "../../modules/HomeScreen/HomeScreen";
import ScheduleActivityModal from "../../modules/ScheduleActivityModal/ScheduleActivityModal";
import TrackActivityModal from "../../modules/TrackActivityModal/TrackActivityModal";

class App extends Component {
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

export default App;
