import { Logger, ValidationPipe } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";
import { NotFoundExceptionFilter } from "~/common/filters/notFoundExceptionFilter";
import { AppModule } from "./app.module";

const options: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

(async function () {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.setGlobalPrefix("api");
  app.enableCors(options);

  const port = process.env.PORT || 8000;
  await app.listen(port, () => {
    Logger.log(`\n\n\DTK API started in ${process.env.NODE_ENV} mode @ http://localhost:${port} \n\n`);
  });
})();
