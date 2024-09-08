const Database = require("../database");

const database = new Database();

class EventoModel {

  constructor(
    nome,
    detalhes,
    data,
    local,
    numIngressos,
    valorIngresso,

  ) {
    this.nome = nome;
    this.detalhes = detalhes;
    this.data = data;
    this.local = local;
    this.numIngressos = numIngressos;
    this.valorIngresso = valorIngresso;
  }

  async adicionar(dados) {
    const sql = 'INSERT INTO eventos SET ?';

    try {
      const result = await database.ExecutaComandoNonQuery(sql, dados);

      return result.insertId;
    } catch (error) {
      throw new Error(`Erro ao adicionar evento: ${error.message}`);
    }
  }

  async obterTodos() {
    const eventos = await database.ExecutaComando("SELECT * FROM eventos");

    return eventos;
  }

  async obterPorId(id) {
    const result = await database.ExecutaComando(
      "SELECT * FROM eventos WHERE id = ?",
      [id]
    );

    return result[0];
  }

  async atualizar(id, dados) {
    await database.ExecutaComandoNonQuery(
      "UPDATE eventos SET ? WHERE id = ?",
      [dados, id]
    );
  }

  async deletar(id) {
    await database.ExecutaComandoNonQuery("DELETE FROM eventos WHERE id = ?", [id]);
  }
}

module.exports = EventoModel;
