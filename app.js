const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [
    { id: 1, title: "Tarefa exemplo", description: "Descrição da tarefa", status: "pendente" },
    { id: 2, title: "Tarefa exemplo 2", description: "Descrição da tarefa 2", status: "concluída" }
];

// Middleware de autenticação (simplificado)
app.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
});

// GET /tasks - Listar tarefas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks - Criar nova tarefa
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Campos obrigatórios estão faltando.' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: 'pendente',
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Atualizar tarefa - IMPLEMENTE ESTE ENDPOINT

// DELETE /tasks/:id - Deletar tarefa
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Tarefa excluída com sucesso.' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
