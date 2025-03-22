const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Permite JSON no body das requisições

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { name, email, telefone, CPF, endereco, cep } = req.body;

    console.log('Dados recebidos:', { name, email, telefone, CPF, endereco, cep });

    res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
