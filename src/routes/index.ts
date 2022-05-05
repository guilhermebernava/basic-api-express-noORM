import Express from "express";
import livros from "./livrosRoutes";

//vai juntar todas as rotas dentro desse arquivo e simplesmente chamar ele dentro do APP.TS
const routes = (app) => {
//rota padrao
  app.route("/").get((req: any, res: any) => {
    res.send("Hello from express");
  });

  //adicionando outras rotas e dizendo que vai usar JSON
  app.use(Express.json(), livros);
};

export default routes;
