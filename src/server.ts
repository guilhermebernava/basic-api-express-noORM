import app from "./app";
const port = process.env.PORT || 3000;

//rodando a API na porta 3000
app.listen(port, () => {
  console.log(`server rodando em http//:localhost:${3000}`);
});
