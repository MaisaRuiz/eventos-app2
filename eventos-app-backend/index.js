const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const evento = require('./src/controllers/eventoController');
const EventoController = new evento();

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/evento', EventoController.obterTodos);
app.get('/evento/:id', EventoController.obterPorId);
app.post('/evento', EventoController.adicionar);
app.put('/evento/:id', EventoController.atualizar);
app.delete('/evento/:id', EventoController.excluir);

app.listen(port, () => console.log(`Executando na porta ${port}`));
