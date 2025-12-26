import { Readable } from 'stream';

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export interface HttpRequest {
  params?: any;
  body?: any;
  query?: any;
  headers?: any;
  files?: File[];
  originalUrl?: string;
  user?: any; // Adicionado pelo middleware de autenticação
}

export interface SocketRequest {
  handshake: {
    auth: { [x: string]: any };
  };
  request: {
    headers: { [x: string]: any };
  };
}

export interface HttpResponse {
  status: number;
  body: any;
  stream?: NodeJS.ReadableStream;
  cookies?: any[];
}

export interface Cookies {
  key: string;
  value: string;
}
