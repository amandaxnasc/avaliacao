import mysql from "mysql2"
import config from "../Config.js";

class CategoriaModel{
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }
    create(nome) {
        let sql = `insert into doces (nome) values("${nome}");`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Categoria Adicionado!"])
            })
        });
    }
    read() {
        let sql = `SELECT * FROM categoria;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if (erro){
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });

    }
    update(id_doce, nome){
        let sql = `UPDATE doces SET nome="${nome}" WHERE id_categoria="${id_doce}"`
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    reject([400, erro])
                }else if(retorno.affectedRows>0){
                resolve([200, "Categoria Atualizado"])
                }else{
                    resolve([404,"Categoria não encontrado!"])
                }
            })

        });
    }

    delete(id_parafuso){
        let sql = `DELETE FROM doce WHERE id_categoria="${id_categoria}"`

        return new Promise ((resolve, reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if(erro){
                    reject([400, erro])
                }else if (retorno.affectedRows>0){
                    resolve([200, "Categroia deletado"])
                }else{
                    resolve([404, "Categoria não deletado"])
                }
                
            })
        });
    }
}

export default new CategoriaModel();