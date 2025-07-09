import { InvalidValueError } from "./errors/InvalidValueError";
import { IntegrationError } from "./errors/IntegrationError";
import { ConflictError } from "./errors/ConflictError";
import { NotFoundError } from "./errors/NotFoundError";
import { IntegrationServerError } from "./errors/IntegrationServerError";
import { InvalidCredentials } from "./errors/InvalidCredentials";
import { HandleResponse } from "./HandleResponse";
import { HttpRequest, HttpResponse } from "./HttpAdapter";
import { Report } from "./Report";

export type ValidateResponse = {
  reports: Report[];
  message: string;
};
export type ServiceData = {
  category?: string;
  service: string;
  serviceDescription?: string;
};
export abstract class BaseController {
  protected defaultErrorMessage: string;
  protected serviceData?: ServiceData;
  // private logService?: ILogService;

  constructor(
    defaultErrorMessage: string,
    serviceData?: ServiceData /*logService?: ILogService*/
  ) {
    this.defaultErrorMessage = defaultErrorMessage;
    this.serviceData = serviceData;
    // this.logService = logService;
  }

  public async execute(request: HttpRequest): Promise<HttpResponse> {
    let response: HttpResponse = {} as HttpResponse;
    try {
      const resultValidation = this.validateRequest(request);

      if (resultValidation) {
        response = HandleResponse.badRequest(
          resultValidation.message,
          resultValidation.reports
        );
        return response;
      }

      response = await this.specificImplementation(request);
    } catch (error: any) {
      const errorName = error.name === "Error" ? "serverError" : error.name;
      const reports = [new Report(errorName, error.message)];
      switch (error.constructor) {
        case InvalidValueError:
          response = HandleResponse.badRequest(
            this.defaultErrorMessage,
            reports
          );
          break;
        case IntegrationError:
          response = HandleResponse.badRequest(
            this.defaultErrorMessage,
            reports
          );
          break;
        case ConflictError:
          response = HandleResponse.conflict(this.defaultErrorMessage, reports);
          break;
        case NotFoundError:
          response = HandleResponse.notFound(this.defaultErrorMessage, reports);
          break;
        case InvalidCredentials:
          response = HandleResponse.unauthorized(
            this.defaultErrorMessage,
            reports
          );
          break;
        case IntegrationServerError:
          response = HandleResponse.serverError(
            this.defaultErrorMessage,
            reports
          );
          break;
        default:
          console.error(error);
          response = HandleResponse.unexpectedErrors(this.defaultErrorMessage, [
            new Report(
              errorName,
              "Ocorreu um erro inesperado em nossos servidores, tente novamente mais tarde ou entre em contato com o suporte!"
            ),
          ]);
          break;
      }
    } finally {
      // this.generateLog(request, response);
      return response;
    }
  }

  protected abstract validateRequest(
    request: HttpRequest
  ): undefined | ValidateResponse;

  protected abstract specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse>;

  // protected async generateLog(request: HttpRequest, response: HttpResponse): Promise<void> {
  //   if (!this.logService) return;

  //   try {
  //     await this.logService.createLog(request, response, this.serviceData);
  //   } catch (error: any) {
  //     response = HandleResponse.unexpectedErrors('Error ao criar log de serviço.', [
  //       new Report('log service', error.message)
  //     ]);
  //   }
  // }
}
