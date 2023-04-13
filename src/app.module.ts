import { Module } from "@nestjs/common";
import { AppEnv } from "~/app.env";
import { HelloModule } from "~/modules/helloworld/helloworld.module";
import { UserModule } from "~/modules/user/user.module";
import { PrismaModule } from "~/prisma/prisma.module";

@Module({
  imports: [AppEnv, PrismaModule, HelloModule, UserModule],
})
export class AppModule {}
