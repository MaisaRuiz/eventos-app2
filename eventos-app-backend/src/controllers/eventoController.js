const EventoModel = require("../models/eventoModel");
const eventoModel = new EventoModel();

class EventoController {
  async adicionar(req, res) {
    const dados = req.body;
    try {
      const id = await eventoModel.adicionar(dados);
      return res.status(201).json({ message: 'Evento cadastrado com sucesso', id });
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
      return res.status(500).json({ error: 'Erro ao cadastrar evento' });
    }
  }

  async obterTodos(req, res) {
    try {
      const eventos = await eventoModel.obterTodos();

      return res.status(200).json(eventos);
    } catch (error) {
      console.error('Erro ao obter eventos:', error);

      return res.status(500).json({ error: 'Erro ao obter eventos' });
    }
  }

  async obterPorId(req, res) {
    const { id } = req.params;

    try {
      const evento = await eventoModel.obterPorId(id);

      if (!evento)
        return res.status(404).json({ error: 'Evento não encontrado' });

      return res.status(200).json(evento);
    } catch (error) {
      console.error('Erro ao obter evento por ID:', error);

      return res.status(500).json({ error: 'Erro ao obter evento por ID' });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const dados = req.body;

    try {
      await eventoModel.atualizar(id, dados);

      return res.status(200).json({ message: 'Evento atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);

      return res.status(500).json({ error: 'Erro ao atualizar evento' });
    }
  }

  async excluir(req, res) {
    const { id } = req.params;

    try {
      await eventoModel.deletar(id);

      return res.status(200).json({ message: 'Evento excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir evento:', error);

      return res.status(500).json({ error: 'Erro ao excluir evento' });
    }
  }
}

module.exports = EventoController;