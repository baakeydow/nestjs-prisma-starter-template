import { Controller, Get } from "@nestjs/common";
import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";
import { HelloService } from "./helloworld.service";

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): StandardDtkApiResponse<{ message: string }> {
    return this.helloService.getHello();
  }
}
