const database = require('../infra/database')

exports.getPessoas = () => {
    return database.query('select * from viagem.pessoas')
}
exports.getPessoa = (pessoa_id) => {
    return database.oneOrNone('select * from viagem.pessoas where id = $1',[pessoa_id])
}
exports.savePessoa = (pessoa) => {
    return database.one('insert into viagem.pessoas (nome, dataNascimento, cpf, ativo, meta) values ($1, $2, $3, true, null) returning * '
    , [pessoa.nome, pessoa.dataNascimento, pessoa.cpf, pessoa.ativo, pessoa.meta])
}
exports.updatePessoa = (pessoa_id, pessoa) => {
    return database.none('update viagem.pessoas set title = $1, content = $2 where pessoa_id = $3'
    , [pessoa.nome, pessoa.dataNascimento, pessoa.cpf, pessoa.ativo, pessoa.meta, pessoa_id])
}
exports.deletePessoa = (pessoa_id) => {
    return database.none('delete from viagem.pessoas where pessoa_id=$1', [pessoa_id])
}