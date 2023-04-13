import { Injectable } from "@nestjs/common";
import { getWelcomeMessage } from "~/common/helpers/getWelcomeMessage";
import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";

@Injectable()
export class HelloService {
  getHello(): StandardDtkApiResponse<{ message: string }> {
    return getWelcomeMessage();
  }
}
