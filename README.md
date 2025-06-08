# DPU Comunidades - Back-End

Back-end da aplicação DPU Comunidades, desenvolvido com Node.js, TypeScript, Express e Prisma. Este projeto serve como API principal para funcionalidades de autenticação, upload de arquivos, integração com banco de dados e mais.

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [JWT](https://jwt.io/) para autenticação
- [Multer](https://github.com/expressjs/multer) para upload de arquivos
- [dotenv](https://github.com/motdotla/dotenv) para gerenciamento de variáveis de ambiente
- [ts-node-dev](https://github.com/wclr/ts-node-dev) para desenvolvimento com reload automático

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/dpucomunidadesback.git
cd dpucomunidadesback
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias, por exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seubanco"
JWT_SECRET="sua_chave_secreta"
```

### 4. Rode as migrações do Prisma (se aplicável)

```bash
npx prisma migrate dev
```

### 5. Inicie o servidor em modo desenvolvimento

```bash
yarn dev
```

O servidor estará disponível por padrão em `http://localhost:3000` (ou outra porta definida).

## 🗂 Scripts disponíveis

| Comando      | Descrição                                      |
|--------------|------------------------------------------------|
| `yarn dev`   | Inicia o servidor com ts-node-dev              |
| `npx prisma` | Executa comandos do Prisma ORM (ex: migrations)|

## 🛡 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👨‍💻 Autor

Desenvolvido por [Seu Nome ou Nome da Equipe].
