
import {
  walkthrough1Responsive,
  walkthrough2Responsive,
  walkthrough3Responsive
} from "../assets/illustrations";

import {
  walkthrough1,
  walkthrough2,
  walkthrough3
} from "../assets/icons";

export const walkthroughCards = [
  {
    id: 1,
    img: walkthrough1Responsive,
    alt: "person on a rocket",
    icon: walkthrough1,
    title: "1—browse",
    text: "Browse our tech catalog with more than 20 top tech products",
  },
  {
    id: 2,
    img: walkthrough2Responsive,
    alt: "two phones with hands coming out of the screens",
    icon: walkthrough2,
    title: "2—Choose",
    text: "Exchange your hard-earned AeroPoints for a cool tech item",
  },
  {
    id: 3,
    img: walkthrough3Responsive,
    alt: "person using a computer",
    icon: walkthrough3,
    title: "3—Enjoy",
    text: "All done We’ll take care of delivery of your tech item!",
  },
];

export const productsFilters = [
  {
    id: 1,
    name: "Most Recent",
  },
  {
    id: 2,
    name: "Lowest Price",
  },
  {
    id: 3,
    name: "Highest Price",
  }
];
