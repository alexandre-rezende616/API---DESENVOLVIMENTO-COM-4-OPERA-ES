const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.all('SELECT id, nome, email FROM usuarios', (err, rows) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err.message);
      return res.status(500).json({ erro: 'Falha ao buscar usuários.' });
    }

    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
  }

  const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
  db.run(query, [nome, email], function (err) {
    if (err) {
      console.error('Erro ao criar usuário:', err.message);
      return res.status(500).json({ erro: 'Falha ao criar usuário.' });
    }

    res.status(201).json({ id: this.lastID, nome, email });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios.' });
  }

  const query = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?';
  db.run(query, [nome, email, id], function (err) {
    if (err) {
      console.error('Erro ao atualizar usuário:', err.message);
      return res.status(500).json({ erro: 'Falha ao atualizar usuário.' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.json({ id: Number(id), nome, email });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.run(query, [id], function (err) {
    if (err) {
      console.error('Erro ao deletar usuário:', err.message);
      return res.status(500).json({ erro: 'Falha ao deletar usuário.' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.status(204).send();
  });
});

module.exports = router;
