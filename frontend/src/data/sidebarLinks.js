import {
  faHouse,
  faPlusCircle,
  faListCheck,
  faMapLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const citizenLinks = [
   {
    label: "Dashboard",
    path: "/citizen/dashboard",
    icon: faHouse,
  },
  {
    label: "Report Issue",
    path: "/citizen/report",
    icon: faPlusCircle,
  },
  {
    label: "My Issues",
    path: "/citizen/issues",
    icon: faListCheck,
  },
  {
    label: "Nearby Issues",
    path: "/citizen/map",
    icon: faMapLocationDot,
  },
  {
    label: "Profile",
    path: "/citizen/profile",
    icon: faUser,
  },
];