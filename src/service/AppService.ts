import { Injectable } from "@nestjs/common";
import { dataType } from "@/types/ordinary-type";
import { AppInterface } from "@/interface/AppInterface";

type reqest = { code: number; data: dataType; msg: string };

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppService implements AppInterface {
  getTitle(id: string): reqest {
    return { code: 200, data: null, msg: "成功了" };
  }
  getName(): string {
    throw new Error("Method not implemented.");
  }
  getAge(): string {
    throw new Error("Method not implemented.");
  }
  setName(): string {
    throw new Error("Method not implemented.");
  }
  setTitle(id: string | undefined): reqest {
    return { code: 200, data: null, msg: "成功了" };
  }
}
