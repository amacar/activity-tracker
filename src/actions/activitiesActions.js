import moment from "moment";

import ActivitiesApi from "../api/ActivitiesApi";

export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export const ACTIVITIES_FETCHED = "ACTIVITIES_FETCHED";
export const ACTIVITY_SAVED = "ACTIVITY_SAVED";

const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const activitiesFetched = (scheduled, tracked) => ({
  type: ACTIVITIES_FETCHED,
  scheduled,
  tracked
});

export const activitySaved = (activity, index) => ({
  type: ACTIVITY_SAVED,
  activity,
  index
});

export const fetchActivities = () => async dispatch => {
  dispatch(fetchActivitiesAction());

  try {
    // fetch activities and move them to scheduled or tracked array
    // this would normally be done on backend but we are using dummy backend
    const activities = await ActivitiesApi.fetchActivities();
    const scheduled = [];
    const tracked = [];
    activities.forEach(activity => {
      if (moment(activity.start).isBefore(Date.now())) {
        tracked.push(activity);
      } else {
        scheduled.push(activity);
      }
    });
    dispatch(activitiesFetched(scheduled, tracked));
  } catch (err) {
    console.log(err);
    dispatch(activitiesFetched());
  }
};

export const saveActivity = activity => async (dispatch, getState) => {
  try {
    const {
      activitiesStore: { scheduled }
    } = getState();
    const saveAtPos = scheduled.findIndex(el => activity.start < el.start);
    const savedActivity = await ActivitiesApi.saveScheduledActivity(activity);
    dispatch(
      activitySaved(
        savedActivity,
        saveAtPos !== -1 ? saveAtPos : Math.max(scheduled.length, 0)
      )
    );
  } catch (err) {
    console.log(err);
  }
};
