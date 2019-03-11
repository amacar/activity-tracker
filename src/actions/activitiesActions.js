import ActivitiesApi from "../api/ActivitiesApi";

export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export const ACTIVITIES_FETCHED = "ACTIVITIES_FETCHED";

const fetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const activitiesFetched = activities => ({
  type: ACTIVITIES_FETCHED,
  activities
});

export const fetchActivities = () => async dispatch => {
  dispatch(fetchActivitiesAction());

  try {
    const activities = await ActivitiesApi.fetchActivities();
    dispatch(activitiesFetched(activities));
  } catch (err) {
    console.log(err);
    dispatch(activitiesFetched());
  }
};
