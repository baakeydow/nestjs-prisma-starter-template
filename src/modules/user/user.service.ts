import { Injectable, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "~/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateUserResponse } from "./types/createUserResponse";
import { GetAllUsersResponse } from "./types/getAllUsersResponse";

const handleUserCreationError = (e: Error): CreateUserResponse => {
  let message = "An unexpected error occured";
  let code = 500;
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === "P2002") {
      code = 409;
      message = "There is a unique constraint violation, a new user cannot be created with this email";
    }
  } else {
    Logger.error(e);
  }
  return {
    data: null,
    error: {
      code,
      message,
      details: e,
    },
  };
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll(email?: string | undefined): Promise<GetAllUsersResponse> {
    try {
      const users = await this.prisma.user.findMany(email ? { where: { email } } : undefined);
      return { data: { users }, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          code: 500,
          message: "An unexpected error occured",
          details: error,
        },
      };
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    try {
      const user = await this.prisma.user.create({ data: createUserDto });
      return { data: { user }, error: null };
    } catch (e) {
      return handleUserCreationError(e);
    }
  }
}
