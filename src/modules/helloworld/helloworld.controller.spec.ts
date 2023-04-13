import { Test, TestingModule } from "@nestjs/testing";
import { getWelcomeMessage } from "./../../common/helpers/getWelcomeMessage";
import { HelloController } from "./helloworld.controller";
import { HelloService } from "./helloworld.service";

describe("HelloController", () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  describe("root", () => {
    it('should return "Welcome to the DTK API, feel free to contact us at admin@kreezalid.com"', () => {
      expect(helloController.getHello()).toStrictEqual(getWelcomeMessage());
    });
  });
});
