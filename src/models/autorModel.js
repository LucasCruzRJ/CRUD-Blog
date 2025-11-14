import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nomeAutor: { type: String, required: true },
  email: { type: String },
});

const autor = mongoose.model("autor", autorSchema);

export default autor;
