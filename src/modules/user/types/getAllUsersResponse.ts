import { User } from "@prisma/client";
import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";

export type GetAllUsersResponse =
  | StandardDtkApiResponse<{ users: User[] }>
  | StandardDtkApiResponse<null, { code: number; message: string; details: Error }>;
