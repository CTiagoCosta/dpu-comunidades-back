import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../BaseController';
import { HttpRequest } from '../HttpAdapter';
import { HttpStatus } from '../HttpStatus';

export const adaptRoute = (controller: BaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      originalUrl: req.originalUrl,
      user: (req as any).user
    };

    const httpResponse = await controller.execute(httpRequest);

    res.status(httpResponse.status).send(httpResponse.body);
    next();
  };
};

export const adaptCookiesRoute = (controller: BaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      originalUrl: req.originalUrl,
      user: (req as any).user
    };

    const httpResponse = await controller.execute(httpRequest);

    const { cookies } = httpResponse;

    if (cookies) {
      cookies.forEach((cookie) => {
        res.cookie(cookie.key, cookie.value, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          maxAge: 24 * 60 * 60 * 1000,
          path: '/'
        });
      });
    }

    if (httpResponse.status !== HttpStatus.SUCCESS) {
      const cookie = {
        key: req.headers?.cookie?.split('=')[0] || ''
      };

      if (cookie.key) {
        res.clearCookie(cookie.key, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          path: '/'
        });
      }
    }

    res.status(httpResponse.status).send(httpResponse.body);
    next();
  };
};

export const adaptClearCookiesRoute = (controller: BaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      originalUrl: req.originalUrl
    };

    const httpResponse = await controller.execute(httpRequest);

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });

    res.status(httpResponse.status).send(httpResponse.body);
    next();
  };
};

export const adaptDownloadRoute = (controller: BaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      originalUrl: req.originalUrl
    };
    const httpResponse = await controller.execute(httpRequest);
    if (httpResponse.status === HttpStatus.SUCCESS) {
      return res.download(httpResponse.body.data);
    }
    return res.status(httpResponse.status).send(httpResponse.body);
  };
};

export const adaptStreamRoute = (controller: BaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      originalUrl: req.originalUrl
    };
    const httpResponse = await controller.execute(httpRequest);
    if (httpResponse.status === HttpStatus.SUCCESS && httpResponse.stream) {
      res.set('Content-disposition', 'inline; filename="teste"');
      res.set('Content-Type', 'application/pdf');
      httpResponse.stream.pipe(res);
    } else {
      return res.status(httpResponse.status).send(httpResponse.body);
    }
  };
};
