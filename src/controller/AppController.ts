import { Body, Controller, Get, Query, Post } from "@nestjs/common";
import { AppDto, GetNameDto } from "@/dto/AppDto";
import { dataType } from "@/types/ordinary-type";
import { AppService } from "@/service/AppService";

@Controller("home")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("setTitle")
  setTitle(@Body() data: GetNameDto): {
    code: number;
    data: dataType;
    msg: string;
  } {
    // 客户端传入的数据
    console.log("传入数据", data);

    // 返回给客户端的数据
    return this.appService.setTitle();
  }

  @Get("getTitle")
  getTitle(@Query("id") id: string): {
    code: number;
    data: dataType;
    msg: string;
  } {
    console.log("客户端传入的数据", id);
    return { code: 0, data: null, msg: "get方法调用成功" };
  }
}
