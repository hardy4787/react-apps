import { Playground, PlaygroundStatus, SportClub, TimeSlot } from "../models";
import Playground1 from "../assets/images/playgrounds/kiev/football/rejo-1/arena-1.jpg";

export const SPORT_CLUBS: SportClub[] = [
  {
    id: 1,
    name: "REJO VDNX",
    playgrounds: [
      {
        id: 1,
        imagePath: Playground1,
        name: "Arena 1",
        timeSlots: [
          {
            startTime: "6:30",
            endTime: "8:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "8:00",
            endTime: "9:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "9:30",
            endTime: "11:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "11:00",
            endTime: "12:30",
            status: PlaygroundStatus.BUSY,
            price: 900,
          },
          {
            startTime: "12:30",
            endTime: "14:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "14:00",
            endTime: "15:30",
            status: PlaygroundStatus.BUSY,
            price: 900,
          },
          {
            startTime: "15:30",
            endTime: "17:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "17:00",
            endTime: "18:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "18:30",
            endTime: "20:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "20:00",
            endTime: "21:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "21:30",
            endTime: "23:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "23:00",
            endTime: "0:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
        ] as TimeSlot[],
      },
      {
        id: 2,
        imagePath: Playground1,
        name: "Arena 2",
        timeSlots: [
          {
            startTime: "6:30",
            endTime: "8:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "8:00",
            endTime: "9:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "9:30",
            endTime: "11:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "11:00",
            endTime: "12:30",
            status: PlaygroundStatus.BUSY,
            price: 900,
          },
          {
            startTime: "12:30",
            endTime: "14:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "14:00",
            endTime: "15:30",
            status: PlaygroundStatus.BUSY,
            price: 900,
          },
          {
            startTime: "15:30",
            endTime: "17:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "17:00",
            endTime: "18:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "18:30",
            endTime: "20:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "20:00",
            endTime: "21:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "21:30",
            endTime: "23:00",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
          {
            startTime: "23:00",
            endTime: "0:30",
            status: PlaygroundStatus.FREE,
            price: 900,
          },
        ] as TimeSlot[],
      },
    ] as Playground[],
  },
];
