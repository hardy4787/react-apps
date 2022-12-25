import { ImageGroup, Image } from "../models";

import Basketball1 from "../assets/images/basketball/basketball-1.jpg";
import Basketball2 from "../assets/images/basketball/basketball-2.jpg";
import Basketball3 from "../assets/images/basketball/basketball-3.jpg";

import Bike1 from "../assets/images/bike/bike-1.jpg";
import Bike2 from "../assets/images/bike/bike-2.jpg";
import Bike3 from "../assets/images/bike/bike-3.jpg";

import Football1 from "../assets/images/football/football-1.jpg";
import Football2 from "../assets/images/football/football-2.jpg";
import Football3 from "../assets/images/football/football-3.jpg";

import Running1 from "../assets/images/running/running-1.jpg";
import Running2 from "../assets/images/running/running-2.jpg";
import Running3 from "../assets/images/running/running-3.jpg";

import Tennis1 from "../assets/images/tennis/tennis-1.jpg";
import Tennis2 from "../assets/images/tennis/tennis-2.jpg";
import Tennis3 from "../assets/images/tennis/tennis-3.jpg";

export const MAIN_PAGE_IMAGES: ImageGroup[] = [
  {
    id: 1,
    images: [
      {
        id: 1,
        title: "basketball-1",
        path: Basketball1,
      },
      {
        id: 2,
        title: "basketball-2",
        path: Basketball2,
      },
      {
        id: 3,
        title: "basketball-3",
        path: Basketball3,
      },
    ] as Image[],
  },
  {
    id: 2,
    images: [
      {
        id: 1,
        title: "bike-1",
        path: Bike1,
      },
      {
        id: 2,
        title: "bike-2",
        path: Bike2,
      },
      {
        id: 3,
        title: "bike-3",
        path: Bike3,
      },
    ] as Image[],
  },
  {
    id: 3,
    images: [
      {
        id: 1,
        title: "football-1",
        path: Football1,
      },
      {
        id: 2,
        title: "football-2",
        path: Football2,
      },
      {
        id: 3,
        title: "football-3",
        path: Football3,
      },
    ] as Image[],
  },
  {
    id: 4,
    images: [
      {
        id: 1,
        title: "running-1",
        path: Running1,
      },
      {
        id: 2,
        title: "running-2",
        path: Running2,
      },
      {
        id: 3,
        title: "running-3",
        path: Running3,
      },
    ] as Image[],
  },
  {
    id: 5,
    images: [
      {
        id: 1,
        title: "tenis-1",
        path: Tennis1,
      },
      {
        id: 2,
        title: "tenis-2",
        path: Tennis2,
      },
      {
        id: 3,
        title: "tenis-3",
        path: Tennis3,
      },
    ] as Image[],
  },
];
