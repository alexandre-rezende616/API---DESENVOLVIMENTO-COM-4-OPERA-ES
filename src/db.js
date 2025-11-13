const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbDirectory = path.join(__dirname, '..', 'db');
const dbPath = path.join(dbDirectory, 'database.sqlite');

try {
  if (!fs.existsSync(dbDirectory)) {
    fs.mkdirSync(dbDirectory, { recursive: true });
    console.log(`Diretório do banco criado em ${dbDirectory}`);
  }
} catch (error) {
  console.error('Erro ao criar diretório do banco:', error.message);
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco SQLite:', err.message);
    return;
  }
  console.log('Conectado ao banco SQLite com sucesso.');

  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )`,
    (tableErr) => {
      if (tableErr) {
        console.error('Erro ao criar tabela usuarios:', tableErr.message);
      } else {
        console.log('Tabela usuarios pronta para uso.');
      }
    }
  );
});

module.exports = db;
