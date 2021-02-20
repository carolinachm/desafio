create schema viagem;

create table viagem.pessoas(
    pessoa_id serial primary key,
    nome text not null,
    dataNascimento text not null,
    cpf text not null,
    ativo boolean,
    meta DECIMAL ,
    date timestamp default now()

);
create table viagem.receita(
    receita_id serial primary key,
    pessoa_id int, 
    valor DECIMAL ,
    date timestamp default now(),
     CONSTRAINT fk_pessoas
      FOREIGN KEY(pessoa_id) 
	  REFERENCES viagem.pessoas(pessoa_id)

)