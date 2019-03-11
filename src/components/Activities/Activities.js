import React from "react";

import "./Activities.css";

const Activities = props => {
  const { noActivitiesText, activities } = props;
  return <span className="Activities-empty">{noActivitiesText}</span>;
};

export default Activities;
