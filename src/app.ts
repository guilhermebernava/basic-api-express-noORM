import express, { Request } from "express";
import { db } from "./config/db";
import routes from "./routes/index";

//#region CONNECTION DB

//toda vez que houver um erro na conexao no banco ele vai aparecer no terminal
db.on("error", console.log.bind(console, "CONNECTION ERROR"));

//abre a conexao com o MONGO DB
db.once("open", () => {
  console.log("CONECTADO COM SUCESSO AO MONGO_DB");
});
//#endregion

//#region  EXPRESS CONFIG

//inicia o EXPRESS
const app = express();

//diz que vai usar JSON como forma de receber dados
app.use(express.json());

//passando o EXPRESS para configurar as rotas dentro do INDEX.TS
routes(app);
//#endregion

export default app;
