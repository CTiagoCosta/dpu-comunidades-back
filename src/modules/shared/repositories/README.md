# Arquitetura de Repositórios com Classe Abstrata

## Visão Geral

Esta estrutura implementa um padrão de Repository com classe abstrata base que força todos os repositórios a implementarem o método `model()` e fornece métodos comuns para operações CRUD.

## Estrutura

```
src/
├── modules/
│   ├── shared/
│   │   └── repositories/
│   │       └── BaseRepository.ts          # Classe abstrata base
│   └── user/
│       ├── interfaces/
│       │   ├── IRoleRepository.ts         # Interface específica para Role
│       │   └── IUserRepository.ts         # Interface específica para User
│       ├── repositories/
│       │   ├── RoleRepository.ts          # Implementação para Role
│       │   └── UserRepository.ts          # Implementação para User
│       └── services/
│           └── UserServiceExample.ts      # Exemplo de uso
```

## Como Funciona

### 1. Classe Abstrata Base (`BaseRepository`)

```typescript
export abstract class BaseRepository<TModel, TCreateInput, TUpdateInput> {
  protected prisma: PrismaClient;
  
  // Método abstrato - OBRIGATÓRIO implementar
  protected abstract get model(): any;
  
  // Métodos comuns disponíveis para todos os repositórios
  async findById(id: string | number): Promise<TModel | null>
  async findAll(): Promise<TModel[]>
  async create(data: TCreateInput): Promise<TModel>
  async update(id: string | number, data: TUpdateInput): Promise<TModel | null>
  async delete(id: string | number): Promise<boolean>
  async count(where?: any): Promise<number>
  async exists(where: any): Promise<boolean>
}
```

### 2. Interface Específica

Cada repositório deve implementar sua interface específica:

```typescript
export interface IRoleRepository {
  // Métodos base (herdados)
  findById(id: number): Promise<Role | null>;
  findAll(): Promise<Role[]>;
  
  // Métodos específicos para Role
  findByName(name: string): Promise<Role | null>;
  createByName(name: string): Promise<Role>;
}
```

### 3. Implementação do Repositório

```typescript
export class RoleRepository 
  extends BaseRepository<Role, CreateRoleInput, UpdateRoleInput> 
  implements IRoleRepository {

  // OBRIGATÓRIO: Implementar o getter model
  protected get model() {
    return this.prisma.role;
  }

  // Métodos específicos
  async findByName(name: string): Promise<Role | null> {
    return await this.model.findFirst({ where: { name } });
  }
}
```

## Vantagens

### 1. **Forçar Implementação**
- A classe abstrata força todos os repositórios a implementarem o método `model()`
- Garante consistência na estrutura

### 2. **Métodos Comuns**
- Evita duplicação de código CRUD básico
- Padroniza operações comuns

### 3. **Tipagem Forte**
- Generics garantem type safety
- Interfaces específicas definem contratos claros

### 4. **Flexibilidade**
- Permite override de métodos base quando necessário
- Métodos específicos podem ser adicionados facilmente

### 5. **Manutenibilidade**
- Mudanças na BaseRepository afetam todos os repositórios
- Estrutura padronizada facilita manutenção

## Exemplo de Uso

```typescript
// Instanciar repositórios
const roleRepository = new RoleRepository();
const userRepository = new UserRepository();

// Usar métodos base
const allRoles = await roleRepository.findAll();
const roleById = await roleRepository.findById(1);

// Usar métodos específicos
const adminRole = await roleRepository.findByName("admin");
const userByEmail = await userRepository.findByEmail("user@example.com");

// Métodos de conveniência
const userCount = await userRepository.count();
const emailExists = await userRepository.exists({ email: "test@test.com" });
```

## Boas Práticas

1. **Sempre implemente a interface específica**
2. **Use generics para tipagem forte**
3. **Override métodos base quando necessário**
4. **Adicione métodos específicos do domínio**
5. **Mantenha a consistência entre repositórios**

## Criando Novo Repositório

Para criar um novo repositório, siga estes passos:

1. **Crie a interface específica**
2. **Estenda BaseRepository**
3. **Implemente a interface**
4. **Defina o getter model()**
5. **Adicione métodos específicos**

```typescript
export class ExampleRepository 
  extends BaseRepository<Example, CreateExampleInput, UpdateExampleInput>
  implements IExampleRepository {
  
  protected get model() {
    return this.prisma.example;
  }
  
  // Métodos específicos aqui...
}
```
