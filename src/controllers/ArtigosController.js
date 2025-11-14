import artigos from "../models/artigoModel.js";

class Artigos {
  static async mostraArtigos(req, res, next) {
    try {
      const todosOsArtigos = artigos.find().populate("autor");
      res.status(200).json(todosOsArtigos);
    } catch (erro) {
      next(erro);
    }
  }

  static async novoArtigo(req, res, next) {
    try {
      const artigoNovo = req.body;
      const artigoCriado = (await artigos.create(artigoNovo)).populate("autor");
      res.status(200).json(artigoCriado);
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizaArtigo(req, res, next) {
    try {
      const id = req.params.id;
      const atualizacao = req.body;
      const artigoAtualizado = artigos.findByIdAndUpdate(id, atualizacao);
      res.status(200).json(artigoAtualizado);
    } catch (erro) {
      next(erro);
    }
  }

  static async deletaArtigo(req, res, next) {
    try {
      const id = req.params.id;
      const artigoDeletado = artigos.findByIdAndDelete(id);
      res.status(200).json({ message: "artigo deletado: ", artigoDeletado });
    } catch (erro) {
      next(erro);
    }
  }
}
