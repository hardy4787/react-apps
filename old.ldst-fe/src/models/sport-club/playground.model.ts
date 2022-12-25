import { TimeSlot } from "./time-slot.model";

export interface Playground {
  id: number;
  imagePath: string;
  name: string;
  timeSlots: TimeSlot[];
}
