import mongoose from "mongoose";
//importa o DOTENV
import 'dotenv/config'

//passa a conexion STRING para o banco MONGO
mongoose.connect(
                //usando as variaveis de ambiente 
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@finnances-cluster.p0rte.mongodb.net/finnances`
);

//exporta essa connection para poder usar o banco livremente
export const db = mongoose.connection;
