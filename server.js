const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
//const MongoConnectionError = require('./errors/MongoConnectionError');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON
app.use(bodyParser.json());

// Middleware para CORS
app.use(cors());

// Conecta-se ao MongoDB com tratamento de erros e tentativas de reconexão
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      reconnectTries: 5,
      reconnectInterval: 5000,
    });
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    // Trate o erro de conexão aqui, por exemplo, enviar uma resposta de erro ao cliente
    res.status(500).json({ message: 'Erro ao conectar ao MongoDB' });
    process.exit(1); // Finaliza o processo Node.js com um código de erro
  }
};

// Rotas da API
const productsRoutes = require('./src/routes/productsRoutes.js');
app.use('/', productsRoutes);

// Middleware de tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ message: 'Ocorreu um erro' });
});

// Inicia o servidor após a conexão bem-sucedida com o MongoDB
app.listen(port, async () => {
  await connectToMongo();
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
