create database loja_doces;
use loja_doces;

create table doces(
id_doces int primary key auto_increment,
nome_doce varchar(30),
id_categoria varchar(30)
);

create table categoria(
id_categoria int primary key auto_increment,
nome_categoria varchar(30)
);

select * from doces;
select * from categoria;

insert into categoria (nome_categoria) values
("Bolos"),
("Tortas"),
("Doces Finos"),
("Doces Tradicionais");


update parafusos set nome="fenda" where id_parafuso=1;

delete from parafusos where id_parafuso=1;

SELECT * FROM parafusos;
