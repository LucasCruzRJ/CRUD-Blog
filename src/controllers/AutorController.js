import autor from "../models/autorModel.js";

class Autor {
  static async mostraAutores(req, res, next) {
    try {
      const todosOsAutores = autor.find();
      res.status(200).json(todosOsAutores);
    } catch (erro) {
      next(erro);
    }
  }

  static async novoAutor(req, res, next) {
    try {
      const autorNovo = req.body;
      const autorCriado = autor.create(autorNovo);
      res.status(200).json(autorCriado);
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizaAutor(req, res, next) {
    try {
      const id = req.params.id;
      const atualizacao = req.body;
      const autorAtualizado = autor.findByIdAndUpdate(id, atualizacao);
      res.status(200).json(autorAtualizado);
    } catch (erro) {
      next(erro);
    }
  }

  static async deletaAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorDeletado = autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor deletado: ", autorDeletado });
    } catch (erro) {
      next(erro);
    }
  }
}
