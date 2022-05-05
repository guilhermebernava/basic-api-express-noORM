import express, { Request } from "express";
import { db } from "./config/db";

//toda vez que houver um erro na conexao no banco ele vai aparecer no terminal
db.on("error", console.log.bind(console, "CONNECTION ERROR"));

//abre a conexao com o MONGO DB
db.once("open", () => {
  console.log("CONECTADO COM SUCESSO AO MONGO_DB");
});

//inicia o EXPRESS
const app = express();

//diz que vai usar JSON como forma de receber dados
app.use(express.json());

//criacao de rotas
//priemiro argumento e a rota e segundo o CONTROLLER
app.get("/", (req, res) => {
  res.status(200).send("Hello from Express");
});

export default app;
