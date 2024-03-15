const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.post('/api/items', (req, res) => {
    // Código para criar um item
});

app.get('/api/items', (req, res) => {
    // Código para obter itens
});

app.get('/api/items/:id', (req, res) => {
    // Código para obter um item específico
});

app.put('/api/items/:id', (req, res) => {
    // Código para atualizar um item específico
});

app.delete('/api/items/:id', (req, res) => {
    // Código para deletar um item específico
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
