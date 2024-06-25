import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
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
        CategoriaModel.create(nome).then(
            resposta => {
                console.debug("Inserindo categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Inserindo categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
            CategoriaModel.read().then(
            resposta =>{
                console.debug("Mostrando categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar categoria");
                console.debug(resposta);
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req, res){
        const id_doces = req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.update(id_doces, nome).then(
            resposta => {
                console.debug("Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req, res) {
        const id_categoria = req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.delete(id_parafuso, nome).then(
            resposta =>{
                console.debug("Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        );        
    }
}
export default new CategoriaController();