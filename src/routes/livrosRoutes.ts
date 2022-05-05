import  Express  from "express";
import controller from "../controllers/LivroController"

const router = Express.Router();

//cria as rotas espeficiamente para os LIVROS

//usa a CONTROLLER para fazer a logica da REQUEST

router.get("/livro", controller.getAll);

router.get('/livro/busca', controller.getByName)

router.get("/livro/:id", controller.getById);

router.post("/livro", controller.post);

router.put("/livro/:id",controller.put);

router.delete("/livro/:id", controller.delete);

export default router;