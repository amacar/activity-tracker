import { Activities as ActivitiesStrings } from "../strings/en";
import surfingImg from "../assets/surfing.png";
import hikingImg from "../assets/hiking.png";
import weightsImg from "../assets/weights.png";
import spinningImg from "../assets/spinning.png";
import surfingIcon from "../assets/icn_surfing.svg";
import hikingIcon from "../assets/icn_hiking.svg";
import weightsIcon from "../assets/icn_weights.svg";
import spinningIcon from "../assets/icn_spin.svg";
import surfingIconLight from "../assets/icn_surfing_light.svg";
import hikingIconLight from "../assets/icn_hiking_light.svg";
import weightsIconLight from "../assets/icn_weights_light.svg";
import spinningIconLight from "../assets/icn_spin_light.svg";

export const Activities = {
  SURFING: {
    ...ActivitiesStrings["SURFING"],
    img: surfingImg,
    icon: surfingIcon,
    iconLight: surfingIconLight
  },
  HIKING: {
    ...ActivitiesStrings["HIKING"],
    img: hikingImg,
    icon: hikingIcon,
    iconLight: hikingIconLight
  },
  WEIGHTS: {
    ...ActivitiesStrings["WEIGHTS"],
    img: weightsImg,
    icon: weightsIcon,
    iconLight: weightsIconLight
  },
  SPINNING: {
    ...ActivitiesStrings["SPINNING"],
    img: spinningImg,
    icon: spinningIcon,
    iconLight: spinningIconLight
  }
};
