import { v4 as uuid_v4 } from "uuid";

export class Task {
  name: string;
  isCompleted: boolean = false;
  id: string;

  constructor(name: string) {
    this.name = name;
    this.id = uuid_v4();
  }
}
