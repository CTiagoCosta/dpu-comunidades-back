import { NextFunction, Request, Response } from 'express';    
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next:NextFunction
) {
   
    // Receber o token JWT
    const authToken = req.headers.authorization;

    // Validar se o token está preenchido
    if (!authToken) {
        res.status(401).end();
    }

    // Bearer 1234567890
    const [, token] = authToken.split(' ');

    try {
        // Validar se o token é válido
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        // Recuperar o id do token e colocar dentro da request
        req.user_id = sub;

        return next();
    } catch (err) {
        res.status(401).end();
    }

}