# Teste de Estágio - API de Gerenciamento de Tarefas

## Objetivo do Desafio

O objetivo deste teste é avaliar sua capacidade de interagir com uma API, realizar operações básicas de CRUD (Create, Read, Update, Delete), e documentar adequadamente as chamadas feitas.

Você deverá utilizar a ferramenta de sua escolha para realizar as requisições (como Postman, cURL ou código em alguma linguagem de programação) e documentar a API, explicando como cada endpoint funciona e como você resolveu possíveis problemas ou comportamentos não documentados.

## Requisitos
Realizar chamadas corretas para a API (conforme especificado abaixo).
Implementar corretamente o endpoint de atualizar tarefa.
Documentar todas as suas chamadas e como solucionou eventuais problemas.
Apresentar a documentação de forma clara e organizada.
Opcional: Fornecer um pequeno código que automatiza as chamadas, se preferir.

### 1. Autenticação
Utilize o token fornecido para todas as requisições:

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

Todas as requisições devem conter esse token no header:



### 2. Listar Tarefas (GET /tasks)
Faça uma requisição para `GET /tasks` e obtenha a lista de tarefas.

### 3. Criar Tarefa (POST /tasks)
Crie uma nova tarefa utilizando `POST /tasks`.

Exemplo de payload:

```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da tarefa"
}
```


### 4. Atualizar Tarefa (PUT /tasks/{id})
Atualize uma tarefa existente utilizando PUT /tasks/{id}.

Exemplo de payload:

```json
{
  "title": "Tarefa Atualizada",
  "description": "Nova descrição da tarefa",
  "status": "concluída"
}
```

### 5. Deletar Tarefa (DELETE /tasks/{id})
Exclua uma tarefa existente utilizando DELETE /tasks/{id}.

Exemplo de requisição:

```
DELETE /tasks/{id}
```

### 6. Testes e Documentação
**Teste as respostas:** Execute as chamadas, explore comportamentos não documentados e valide as respostas. Você pode incluir dados como códigos de status HTTP e possíveis mensagens de erro.
Implemente corretamente o endpoint de atualizar tarefa.
Documentação: Forneça uma breve documentação explicando o comportamento de cada endpoint, os parâmetros esperados e as respostas obtidas.

## Critérios de Avaliação
**Capacidade técnica:** Capacidade de realizar as requisições corretamente.
Implementar corretamente o endpoint de atualizar tarefa.
Autonomia: Capacidade de lidar com problemas e documentação incompleta.
Clareza na documentação: A documentação deve ser clara e fácil de entender.
Exploração e criatividade: Exploração de funcionalidades não documentadas e criatividade na solução de problemas.