import { FETCH_ACTIVITIES, ACTIVITIES_FETCHED } from "../actions/activitiesActions";

export const activitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return {
        ...state,
        isFetching: true
      };
    case ACTIVITIES_FETCHED:
      return {
        ...state,
        isFetching: false,
        activities: action.activities
      };
    default:
      return state;
  }
};
