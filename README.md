# API de Usuários (Node + Express + SQLite)

API REST simples para gerenciar usuários, construída com Node.js, Express e SQLite. Permite criar, listar, atualizar e remover registros em um banco local.

## Tecnologias Utilizadas
- Node.js
- Express
- SQLite (sqlite3)
- CORS

## Como rodar o projeto localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. A API ficará acessível em `http://localhost:3000`.

## Endpoints
| Método | Endpoint            | Descrição                        |
|--------|---------------------|----------------------------------|
| GET    | `/usuarios`         | Retorna todos os usuários.       |
| POST   | `/usuarios`         | Cria um novo usuário.            |
| PUT    | `/usuarios/{id}`    | Atualiza dados do usuário.       |
| DELETE | `/usuarios/{id}`    | Remove um usuário.               |

### Exemplos de body JSON
- POST `/usuarios`
  ```json
  {
    "nome": "alexandre",
    "email": "xandirezende@gmail.com"
  }
  ```
- PUT `/usuarios/1`
  ```json
  {
    "nome": "alexandre torres",
    "email": "xandirezende@gmail.com"
  }
  ```

## Testando com  Thunder Client
1. Abra a ferramenta ( a extensão Thunder Client no VS Code).
2. Crie uma nova requisição e selecione o método desejado (GET, POST, PUT, DELETE).
3. Use a URL base `http://localhost:3000` e complete com o endpoint (`/usuarios`, `/usuarios/1`, etc.).
4. Para POST e PUT, escolha o tipo **Body > raw > JSON** e cole um dos exemplos de payload acima.
5. Envie a requisição e verifique o status/response retornado pela API.


## Observações
- O arquivo do banco (`db/database.sqlite`) é criado automaticamente na primeira execução.
- Se precisar alterar a porta, defina a variável de ambiente `PORT` antes de rodar `npm start`.
