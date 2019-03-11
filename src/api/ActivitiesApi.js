import axios from "axios";

export default {
  async fetchActivities() {
    try {
      const response = await axios.get("/activities/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
