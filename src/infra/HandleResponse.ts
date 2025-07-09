import { Cookies, HttpResponse } from './HttpAdapter';
import { HttpStatus } from './HttpStatus';
import { Report } from './Report';
import { Result } from './Result';

export abstract class HandleResponse {
  public static created<T>(data: T, message?: string): HttpResponse {
    return {
      status: HttpStatus.CREATED,
      body: new Result<T>(data, message)
    };
  }

  public static success<T>(data: T, message?: string): HttpResponse {
    return {
      status: HttpStatus.SUCCESS,
      body: new Result<T>(data, message)
    };
  }

  public static notFound(message: string, errors: Report[], data?: any): HttpResponse {
    return {
      status: HttpStatus.NOT_FOUND,
      body: new Result(data || null, message, false, errors)
    };
  }

  public static conflict(message: string, errors: Report[]): HttpResponse {
    return {
      status: HttpStatus.CONFLICT,
      body: new Result(null, message, false, errors)
    };
  }

  public static unexpectedErrors(message: string, errors: Report[]): HttpResponse {
    return {
      status: HttpStatus.INTERNAL_ERROR,
      body: new Result(null, message, false, errors)
    };
  }

  public static serverError(message = 'Internal server errors', errors: Report[]): HttpResponse {
    return {
      status: HttpStatus.INTERNAL_ERROR,
      body: new Result(null, message, false, errors)
    };
  }

  public static forbidden(message: string, errors: Report[]): HttpResponse {
    return {
      status: HttpStatus.FORBIDDEN,
      body: new Result(null, message, false, errors)
    };
  }

  public static unauthorized(message: string, reports?: Report[]): HttpResponse {
    return {
      status: HttpStatus.UNAUTHORIZED,
      body: new Result(null, message || 'restricted access', false, reports)
    };
  }

  public static badRequest(message: string, errors: Report[]): HttpResponse {
    return {
      status: HttpStatus.BAD_REQUEST,
      body: new Result(null, message, false, errors)
    };
  }

  public static stream(stream: NodeJS.ReadableStream): HttpResponse {
    return {
      status: HttpStatus.SUCCESS,
      body: null,
      stream
    };
  }

  public static cookies<T>(data: T, message?: string, cookies?: Cookies[]): HttpResponse {
    return {
      status: HttpStatus.SUCCESS,
      body: new Result<T>(data, message),
      cookies: cookies
    };
  }
}
