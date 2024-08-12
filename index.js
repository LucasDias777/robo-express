const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';



// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 

app.get('/message', (req, res) => {
  const userMessage = req.query.message;

  // Simples lógica de resposta
  let botResponse = 'Desculpe, não entendi.';

  if (userMessage.includes('oi') || userMessage.includes('olá')) {
    res.sendFile(path.join(__dirname, 'public', 'index-Hello.html'));

  } else if (userMessage.includes('adeus') || userMessage.includes('tchau')) {
    res.sendFile(path.join(__dirname, 'public', 'index-Bye.html'));

  }

});

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});