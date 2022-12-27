import { Injectable } from "@nestjs/common";
import { dataType } from "@/types/ordinary-type";
import { AppInterface } from "@/interface/AppInterface";
import { ResultUtil } from "@/utils/ResultUtil";

type reqest = { code: number; data: dataType; msg: string };

@Injectable()
export class AppService implements AppInterface {
  getTitle(): ResultUtil {
    return ResultUtil.success("标题设置成功");
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
  setTitle(): reqest {
    return { code: 200, data: null, msg: "成功了" };
  }
}
