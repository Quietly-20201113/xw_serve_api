import { dataType } from "@/types/ordinary-type";

export interface AppInterface {
  getTitle(id: string): {
    code: number;
    data: dataType;
    msg: string;
  };
  getName(): string;
  getAge(): string;
  setName(): string;
  setTitle(id: string): {
    code: number;
    data: dataType;
    msg: string;
  };
}
