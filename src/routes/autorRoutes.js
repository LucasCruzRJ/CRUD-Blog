import express from "express";

const router = Router();

router.get("/autores", mostraAutores);
router.post("/autores", novoAutor);
router.put("/autores/:id", atualizaAutor);
router.delete("/autores/:id", deletaAutor);

export default router;
