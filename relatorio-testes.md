# Relatório de Testes da API de Usuários

## Ambiente de Testes
- Ferramenta: Thunder Client
- Base URL: `http://localhost:3000`
- Observações gerais: testes realoizados com sucesso

---

## Teste 1 – Listar todos os usuários
- Método: **GET**
- Endpoint: `/usuarios`
- Body: _não se aplica_
- Resultado esperado: **200 OK** com array JSON de usuários
- Resultado obtido: 200 OK
- Observações: FUNCIONOU COONFORME O ESPERADO

## Teste 2 – Criar novo usuário
- Método: **POST**
- Endpoint: `/usuarios`
- Body (JSON):
  ```json
  {
    "nome": "alexandre",
    "email": "xandirezende@gmail.com"
  }
  ```
- Resultado esperado: **201 Created** com objeto `{ id, nome, email }`
- Resultado obtido: 201 created
- Observações: funcioonou conforme o esperado

## Teste 3 – Atualizar usuário existente
- Método: **PUT**
- Endpoint: `/usuarios/{id}`
- Body (JSON):
  ```json
  {
    "nome": "alexandre",
    "email": "xandirezende@gmail.com"
  }
  ```
- Resultado esperado: **200 OK** com objeto atualizado `{ id, nome, email }`
- Resultado obtido: 200 ok
- Observações: funcinou como esperado

## Teste 4 – Remover usuário
- Método: **DELETE**
- Endpoint: `/usuarios/{id}`
- Body: _não se aplica_
- Resultado esperado: **204 No Content**
- Resultado obtido: 204 no content
- Observações: funcinou como esperado


---

Assinatura/Testador: alexandre torres rezende
Data: 13 / 11 / 2025
