import axios from "axios";

const activitiesUrl = "/activities";

export default {
  async fetchActivities() {
    try {
      const response = await axios.get(activitiesUrl, {
        params: { _sort: "start" }
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  async saveScheduledActivity(activity) {
    try {
      const response = await axios.post(activitiesUrl, activity);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
};
