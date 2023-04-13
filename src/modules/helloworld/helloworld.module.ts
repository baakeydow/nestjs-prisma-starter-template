import { Module } from "@nestjs/common";
import { HelloController } from "./helloworld.controller";
import { HelloService } from "./helloworld.service";

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
