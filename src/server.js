const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');
require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Usuários funcionando!' });
});

app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
