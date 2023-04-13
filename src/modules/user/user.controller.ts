import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateUserResponse } from "./types/createUserResponse";
import { GetAllUsersResponse } from "./types/getAllUsersResponse";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/user/all")
  async getAll(@Query("email") email?: string): Promise<GetAllUsersResponse> {
    return await this.userService.getAll(email);
  }

  @Post("/user/create")
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    return await this.userService.createUser(createUserDto);
  }
}
