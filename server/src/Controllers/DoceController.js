import DoceModel from "../Models/DoceModel.js";

class DoceController{
    constructor() {
        this.doces =[
            { nome: "Bolos" },
            { nome: "Tortas" },
            { nome: "Doces Finos" },
            { nome: "Doces Tradicionais" },
        ];
    }
    create(req, res){
        const nome = req.body.nome;
        DoceModel.create(nome).then(
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
        DoceModelModel.read().then(
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
        const nome = req.body.nome;

        DoceModelModel.update(id_doces, nome).then(
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
        const nome = req.body.nome;

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