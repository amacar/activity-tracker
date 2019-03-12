import React, { Fragment } from "react";
import moment from "moment";

import "./ActivitiesRow.css";

const ActivitiesRow = ({ group: { month, day, dayWord, activities } }) => {
  return (
    <div>
      {month} {day} {dayWord}
      {activities.map(activity => (
        <div key={activity.id}>
          {activity.id} {activity.type}
        </div>
      ))}
    </div>
  );
};

export default ActivitiesRow;
