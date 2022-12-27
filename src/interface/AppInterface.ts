import { dataType } from "@/types/ordinary-type";
import { ResultUtil } from "@/utils/ResultUtil";

export interface AppInterface {
  getTitle(): ResultUtil;
  getName(): ResultUtil;
  getAge(): ResultUtil;
  setName(): ResultUtil;
  setTitle(): ResultUtil;
}
