import express from "express";

const router = Router();

router.get("/artigos", mostraArtigos);
router.post("/artigos", novoArtigo);
router.put("/artigos/:id", atualizaArtigo);
router.delete("/artigos/:id", deletaArtigo);

export default router;
