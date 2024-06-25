import express from "express"; //importado o express
import DoceController from "./Controllers/DoceController.js";

const server = express(); //iniciando o express

server.use(express.json()); //Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/doces',DoceController.read);
server.post('/doces',DoceController.create);
server.put('/doces/:id_doces', DoceController.update);
server.delete('/doces/:id_doces',DoceController.delete);

server.listen(5000);