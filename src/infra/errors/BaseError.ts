export class BaseError extends Error {
  name: string;
  message: string;

  constructor(
    name: string = 'Erro integração',
    message: string = 'Erro ao realizar integração com api de serviços.'
  ) {
    super(message);
    this.name = name;
    this.message = message;
  }
}
