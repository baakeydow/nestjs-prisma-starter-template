import { v4 as uuidv4 } from "uuid";
import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "~/modules/user/user.controller";
import { UserService } from "~/modules/user/user.service";
import { PrismaService } from "~/prisma/prisma.service";

const userArray = [
  { id: uuidv4(), email: "user0@email.com", username: "user0", createdAt: "2023-03-19 00:49:30.964", updatedAt: "2023-03-19 00:49:30.964" },
  { id: uuidv4(), email: "user1@email.com", username: "user1", createdAt: "2023-03-19 00:49:30.964", updatedAt: "2023-03-19 00:49:30.964" },
];

const oneUser = userArray[0];

const db = {
  user: {
    findMany: jest.fn().mockResolvedValue(userArray),
    create: jest.fn().mockReturnValue(oneUser),
  },
};

describe("UserController", () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe("user-create-one", () => {
    it("should create user", async () => {
      const res = await userController.create(oneUser);
      expect(res.data.user.email).toEqual(oneUser.email);
    });
  });

  describe("user-get-all", () => {
    it("should return an array of users", async () => {
      const res = await userController.getAll();
      expect(res.data.users).toEqual(userArray);
    });
  });
});
