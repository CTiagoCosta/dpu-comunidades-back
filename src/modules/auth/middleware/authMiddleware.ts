import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import configs from "../../../configs";
import { HttpStatus } from "../../../infra/HttpStatus";
import { Result } from "../../../infra/Result";
import { UserRepository } from "../../user/repositories/UserRepository";
import { AuthService } from "../services/AuthService";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization || req.headers["x-access-token"];
  if (!token) {
    res
      .status(HttpStatus.UNAUTHORIZED)
      .send(
        new Result(
          null,
          "Acesso restrito, somente usuários autenticados podem acessar."
        )
      );
    return;
  }
  try {
    const clearedToken = token.toString().replace("Bearer ", "");
    const authService = new AuthService();
    const payload = await authService.verifyToken(
      clearedToken,
      configs.JWT_SECRET
    );

    const userRepository = new UserRepository();
    const user = await userRepository.findById(payload.userId);

    if (!user) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .send(
          new Result(
            null,
            "Usuário não encontrato, verifique as informações e tente novamente."
          )
        );
      return;
    }

    req.body["accessUser"] = user;
    next();
    return;
  } catch (error: any) {
    switch (error.constructor) {
      case TokenExpiredError:
        res
          .status(HttpStatus.UNAUTHORIZED)
          .send(new Result(null, "Token expirado."));
        break;
      case JsonWebTokenError:
        res
          .status(HttpStatus.UNAUTHORIZED)
          .send(new Result(null, "Token inválido."));
        break;
      default:
        res
          .status(HttpStatus.INTERNAL_ERROR)
          .send(new Result(null, error.message));
        break;
    }
    return;
  }
};
