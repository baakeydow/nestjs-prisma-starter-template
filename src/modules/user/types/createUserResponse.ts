import { User } from "@prisma/client";
import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";

export type CreateUserResponse =
  | StandardDtkApiResponse<{ user: User }>
  | StandardDtkApiResponse<null, { code: number; message: string; details: Error }>;
