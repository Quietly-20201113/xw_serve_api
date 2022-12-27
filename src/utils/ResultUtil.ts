// 返回给调用者的视图结构
import { Result } from "@/utils/Result";

export class ResultUtil {
  public static success<T>(data?: T): Result<T> {
    const resultVo = new Result<T>();
    resultVo.setCode(0);
    resultVo.setMsg("接口调用成功");
    resultVo.setData(data || null);
    return resultVo;
  }

  public static error(code: number, msg: string): Result<null> {
    const resultVo = new Result<null>();
    resultVo.setCode(code);
    resultVo.setMsg(msg);
    return resultVo;
  }
}
