import React, { Fragment } from "react";
import moment from "moment";

import "./Activities.css";
import ActivitiesRow from "./ActivitiesRow";

const groupActivitiesByDayMonth = activities => {
  const groupedActivities = {};
  activities.forEach(activity => {
    const date = moment(activity.start);
    const month = date.format("MMMM");
    const day = date.format("D");
    const dayWord = date.format("dddd");
    const key = month + day;

    if (!groupedActivities[key]) {
      groupedActivities[key] = { month, day, dayWord, activities: [] };
    }
    groupedActivities[key].activities.push(activity);
  });

  return groupedActivities;
};

const Activities = ({ noActivitiesText, activities, isFetching }) => {
  const renderActivities = () => {
    if (isFetching) {
      return <span className="Activities-empty">Loading...</span>;
    } else if (!isFetching && activities && activities.length > 0) {
      return Object.values(groupActivitiesByDayMonth(activities)).map(
        (group, i) => <ActivitiesRow key={i} group={group} />
      );
    } else {
      return <span className="Activities-empty">{noActivitiesText}</span>;
    }
  };

  return <Fragment>{renderActivities()}</Fragment>;
};

export default Activities;
