import mysql from "mysql2"
import config from "../Config.js";

class DoceModel {
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
                resolve([201, "Doce Adicionado!"])
            })
        });
    }
    read() {
        let sql = `SELECT * FROM doces;`

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
        let sql = `UPDATE doces SET nome="${nome}" WHERE id_doce="${id_doce}"`
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    reject([400, erro])
                }else if(retorno.affectedRows>0){
                resolve([200, "Doce Atualizado"])
                }else{
                    resolve([404,"Doce não encontrado!"])
                }
            })

        });
    }

    delete(id_parafuso){
        let sql = `DELETE FROM doce WHERE id_doce="${id_doce}"`

        return new Promise ((resolve, reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if(erro){
                    reject([400, erro])
                }else if (retorno.affectedRows>0){
                    resolve([200, "Doce deletado"])
                }else{
                    resolve([404, "Doce não deletado"])
                }
                
            })
        });
    }
}

export default new DoceModel();