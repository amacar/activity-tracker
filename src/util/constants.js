import { Activities as ActivitiesStrings } from "../strings/en";
import surfingImg from "../assets/surfing.png";
import hikingImg from "../assets/hiking.png";
import weightsImg from "../assets/weights.png";
import spinningImg from "../assets/spinning.png";
import surfingIcon from "../assets/icn_surfing.svg";
import hikingIcon from "../assets/icn_hiking.svg";
import weightsIcon from "../assets/icn_weights.svg";
import spinningIcon from "../assets/icn_spin.svg";

export const Activities = {
  SURFING: {
    ...ActivitiesStrings["SURFING"],
    img: surfingImg,
    icon: surfingIcon
  },
  HIKING: {
    ...ActivitiesStrings["HIKING"],
    img: hikingImg,
    icon: hikingIcon
  },
  WEIGHTS: {
    ...ActivitiesStrings["WEIGHTS"],
    img: weightsImg,
    icon: weightsIcon
  },
  SPINNING: {
    ...ActivitiesStrings["SPINNING"],
    img: spinningImg,
    icon: spinningIcon
  }
};
