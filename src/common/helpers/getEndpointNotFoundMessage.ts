import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";

export const getEndpointNotFoundMessage = (request: Request): StandardDtkApiResponse<null, { code: number; message: string }> => {
  return {
    data: null,
    error: {
      code: 404,
      message: `[DTK API] ${request.method} does not exist for ${request.url}`,
    },
  };
};
