import { PlaygroundStatus } from "./playground-status.enum";

export interface TimeSlot {
  startTime: string;
  endTime: string;
  status: PlaygroundStatus;
  price: number;
}
