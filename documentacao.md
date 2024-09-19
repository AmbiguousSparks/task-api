# Documentação Preliminar da API de Gerenciamento de Tarefas

## Visão Geral

A API de gerenciamento de tarefas permite que os usuários realizem operações básicas de CRUD (Create, Read, Update, Delete) em tarefas. Abaixo estão os endpoints principais e informações sobre como utilizá-los.

Você precisará explorar certos aspectos da API por conta própria, já que nem todos os detalhes estão documentados.


## Pré-requisitos:
Node.js e npm instalados.  
Acesso a um editor de código e ao terminal (ou PowerShell).

1. Clone o repositório ou copie o código-fonte da API:
```
https://github.com/AmbiguousSparks/task-api.git
```
2. Instale as dependências: No diretório raiz do projeto, execute o seguinte comando no terminal para instalar as dependências:

```
npm install
```
3. Inicie o servidor: Após a instalação das dependências, inicie o servidor da API com o comando:
```
npm start
```

4. Acesse a API: A API estará disponível em http://localhost:3000. Use ferramentas como Postman ou cURL para fazer as requisições.

## Autenticação

Todas as requisições à API exigem autenticação por meio de Bearer Token.

Token de acesso:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

O token deve ser enviado no header da requisição:
```
Authorization: Bearer {token}
```

# Endpoints
### 1. Listar Tarefas

Descrição: Retorna a lista de tarefas cadastradas.

Endpoint: GET /tasks  
Autenticação: Requer token.  
Parâmetros: Não documentado.  
Resposta de Sucesso:

```

```

**Possíveis Dúvidas:** Qual é o formato completo da resposta?


### 2. Criar Tarefa

Descrição: Cria uma nova tarefa.  
Endpoint: POST /tasks  
Autenticação: Requer token.  
Parâmetros: Não documentado.  
Exemplo de Payload:


```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da tarefa"
}
```
**Resposta de Sucesso:**

```json
{
  "id": 3,
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa",
  "status": "pendente"
}

```

**Possíveis Dúvidas:** Quais campos são obrigatórios?

### 5. Notas Adicionais

Alguns comportamentos da API não estão completamente documentados. Para concluir o teste, você precisará explorar e descobrir as funcionalidades por conta própria.

Utilize ferramentas como Postman ou cURL para testar as requisições.