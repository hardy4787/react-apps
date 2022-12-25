import { Playground } from "./playground.model";

export interface SportClub {
  id: number;
  name: string;
  playgrounds: Playground[];
}
