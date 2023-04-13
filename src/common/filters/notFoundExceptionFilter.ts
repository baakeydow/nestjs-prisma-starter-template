import { Response } from "express";
import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";
import { getEndpointNotFoundMessage } from "~/common/helpers/getEndpointNotFoundMessage";
import { getWelcomeMessage } from "~/common/helpers/getWelcomeMessage";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (request.url === "/") return response.status(200).json(getWelcomeMessage());
    response.status(404).json(getEndpointNotFoundMessage(request));
  }
}
