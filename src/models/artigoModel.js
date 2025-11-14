import mongoose from "mongoose";

const artigoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  dataDePublicacao: { Type: Date },
  tags: {
    type: String,
    enum: ["ciência", "humor", "literatura", "tecnologia"],
    required: true,
  },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "autor" },
});

const artigos = mongoose.model("artigos", artigoSchema);

export default artigos;
