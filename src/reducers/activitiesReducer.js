import {
  FETCH_ACTIVITIES,
  ACTIVITIES_FETCHED,
  ACTIVITY_SAVED
} from "../actions/activitiesActions";

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
        scheduled: action.scheduled,
        tracked: action.tracked
      };
    case ACTIVITY_SAVED:
      return {
        ...state,
        scheduled: [
          ...state.scheduled.slice(0, action.index),
          action.activity,
          ...state.scheduled.slice(action.index)
        ]
      };
    default:
      return state;
  }
};
