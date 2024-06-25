import DoceModel from "../Models/DoceModel.js";

class DoceController{
    constructor() {
        this.doces =[
            { nome_doce: "" },          
        ];
    }
    create(req, res){
        const nome_doce = req.body.nome_doce;
        DoceModel.create(nome_doce).then(
            resposta => {
                console.debug("Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        DoceModel.read().then(
            resposta =>{
                console.debug("Mostrando Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar Doce");
                console.debug(resposta);
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req, res){
        const id_doces = req.params.id_doces;
        const nome_doce = req.body.nome;

        DoceModel.update(id_doces, nome).then(
            resposta => {
                console.debug("Atualizando Doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro atualizando doces")
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req, res) {
        const id_doces = req.params.id_doces;
        const nome_doce = req.body.nome;

        DoceModel.delete(id_parafuso, nome).then(
            resposta =>{
                console.debug("Deletando Doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar doce")
                res.status(resposta[0]).json(resposta[1])
            }
        );        
    }
}
export default new DoceController();