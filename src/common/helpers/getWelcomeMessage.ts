import { StandardDtkApiResponse } from "~/common/types/StandardDtkApiResponse";

export const getWelcomeMessage = (): StandardDtkApiResponse<{ message: string }> => {
  return {
    data: {
      message: "Welcome to the DTK API, feel free to contact us at admin@kreezalid.com",
    },
    error: null,
  };
};
